document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera normal

    // Captura los datos ingresados
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica
    if (!email || !password) {
        showError('Por favor, completa todos los campos.');
        return;
    }

    // Simula una autenticación (esto es solo un ejemplo educativo)
    if (validateCredentials(email, password)) {
        showSuccess('Inicio de sesión exitoso. Redirigiendo...');
        // Simula una redirección después de 2 segundos
        setTimeout(() => {
            window.location.href = "https://www.ejemplo.com"; // Cambia esto por la URL deseada
        }, 2000);
    } else {
        showError('Correo electrónico o contraseña incorrectos.');
    }

    // Limpia el formulario
    document.getElementById('login-form').reset();
});

// Función para validar credenciales (simulación)
function validateCredentials(email, password) {
    // Credenciales de ejemplo (solo para fines educativos)
    const validEmail = "usuario@ejemplo.com";
    const validPassword = "contraseña123";

    return email === validEmail && password === validPassword;
}

// Función para mostrar mensajes de error
function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

// Función para mostrar mensajes de éxito
function showSuccess(message) {
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = message;

    // Estilos para el mensaje de éxito
    successElement.style.backgroundColor = '#4CAF50';
    successElement.style.color = '#fff';
    successElement.style.padding = '10px';
    successElement.style.borderRadius = '4px';
    successElement.style.marginTop = '10px';
    successElement.style.textAlign = 'center';

    // Inserta el mensaje en el formulario
    const loginBox = document.querySelector('.login-box');
    loginBox.appendChild(successElement);

    // Elimina el mensaje después de 3 segundos
    setTimeout(() => {
        loginBox.removeChild(successElement);
    }, 3000);
}

.error-message {
    color: red;
    margin-top: 10px;
    display: none;
}

.success-message {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    text-align: center;
}
