// Importar las funciones necesarias de Firebase
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Configurar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEWPP5MEi7TD5VTZkp7my1VztTcSEx-KE",
    authDomain: "login-attempts-9606c.firebaseapp.com",
    projectId: "login-attempts-9606c",
    storageBucket: "login-attempts-9606c.firebasestorage.app",
    messagingSenderId: "663920712947",
    appId: "1:663920712947:web:ad71401e5dc108a5d2eb86"
};

// Inicializar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para registrar un intento de inicio de sesión
async function registerLoginAttempt(email, success) {
    try {
        // Guardar el intento de inicio de sesión en Firestore
        await addDoc(collection(db, "login_attempts"), {
            email: email,
            success: success,
            timestamp: new Date()  // Guardar la fecha y hora del intento
        });
        console.log("Intento registrado correctamente en Firestore.");
    } catch (e) {
        console.error("Error al registrar el intento de inicio de sesión: ", e);
    }
}

// Función para manejar el envío del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simular validación de inicio de sesión (aquí puedes añadir tu propia lógica de autenticación)
    if (email === "test@example.com" && password === "123456") {
        // Si las credenciales son correctas, registramos un intento exitoso
        await registerLoginAttempt(email, true);
        window.location.href = "welcome.html"; // Redirigir a una página de bienvenida
    } else {
        // Si las credenciales son incorrectas, mostramos un mensaje de error
        document.getElementById("error-message").textContent = "Correo electrónico o contraseña incorrectos.";
        await registerLoginAttempt(email, false); // Registrar un intento fallido
    }
});
