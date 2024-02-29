const message = document.getElementById('message');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const contrasenaRegistroInput = document.getElementById('contrasena-registro');
const contrasenaRegistroConfirmInput = document.getElementById('contrasena-registro-confirm');
const homepage = '../pages/inicio.html'; // Replace this with your actual homepage URL


function cerrarModal() {
    // Your existing code
}

function validarRegistro() {
    // Your existing code
}

function iniciarSesionGoogle() {
    // Your existing code
}

function registrarUsuario() {
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const contrasenaRegistro = contrasenaRegistroInput.value;
    const contrasenaRegistroConfirm = contrasenaRegistroConfirmInput.value;

    if (contrasenaRegistro !== contrasenaRegistroConfirm) {
        message.textContent = 'Las contraseñas no coinciden.';
        message.style.color = 'red';
        return false;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const existingUser = usuarios.find(user => user.email === email);

    if (existingUser) {
        message.textContent = 'El usuario ya existe.';
        message.style.color = 'red';
        return false;
    }

    usuarios.push({ nombre, email, contrasena: contrasenaRegistro });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    message.textContent = 'Usuario registrado exitosamente.';
    message.style.color = 'green';
    window.location.href = homepage;

    return true;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (registrarUsuario()) {
        // Redirect to login or homepage
    }
});
