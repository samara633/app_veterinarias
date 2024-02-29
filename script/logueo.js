const message = document.getElementById('message');
const usuarioInput = document.getElementById('usuario');
const contrasenaInput = document.getElementById('contrasena');
const form = document.getElementById('login-form');
const homepage = '../pages/inicio.html'; // Replace this with your actual homepage URL

// Get the modal element
const modal = document.getElementById('login-modal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    cerrarModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

function cerrarModal() {
    modal.style.display = "none";
}

function abrirModal(modalId) {
    const modalToOpen = document.getElementById(modalId);
    cerrarModal(); // Close any open modals before opening a new one
    modalToOpen.style.display = "block";
}

function iniciarSesion(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const usuario = usuarioInput.value;
    const contrasena = contrasenaInput.value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const user = usuarios.find(user => user.email === usuario && user.contrasena === contrasena);

    if (!user) {
        message.textContent = 'El usuario o la contraseña son incorrectos.';
        message.style.color = 'red';
        return false;
    }

    message.textContent = 'Inicio de sesión exitoso.';
    message.style.color = 'green';

    // Redirect to homepage
    setTimeout(() => {
        window.location.href = homepage;
    }, 1000);

    return true;
}

form.addEventListener('submit', iniciarSesion);

function isUserLoggedIn() {
    return localStorage.getItem('user') !== null; // Replace this with your actual user object storage method
}