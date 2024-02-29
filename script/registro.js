function validarRegistro() {
    // Implementa tu lógica de validación
    return true; // Devuelve true si la validación es exitosa
}

function iniciarSesionGoogle() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'TU_CLIENT_ID', // Reemplaza con tu propio ID de cliente de Google
        }).then(function(auth2) {
            auth2.signIn().then(function(googleUser) {
                // Aquí puedes manejar la información del usuario de Google
                console.log('Usuario de Google:', googleUser.getBasicProfile());
            });
        });
    });
}

function cerrarModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
}

// Llamas a esta función al cargar la página para establecer la visibilidad inicial
actualizarVisibilidadPestanas();
