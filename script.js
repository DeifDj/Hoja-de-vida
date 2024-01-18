// Función para agregar habilidades
function agregarHabilidad() {
    let nuevaHabilidad = prompt("Introduce una nueva habilidad:");
    if (nuevaHabilidad) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = nuevaHabilidad;
        ul.appendChild(li);
    }
}

// Función para manejar el botón de contacto
function manejarBotonContacto() {
    var userEmail = prompt('Por favor, ingresa tu correo electrónico:');
    
    if (userEmail !== null && userEmail !== '') {
        alert('¡Gracias por proporcionar tu correo electrónico! Nos pondremos en contacto contigo.');
        // Puedes agregar lógica adicional aquí, como enviar el correo electrónico o realizar otras acciones.
    } else {
        alert('No proporcionaste un correo electrónico. Intenta nuevamente si deseas contactarnos.');
    }
}

// Función para mostrar certificaciones
function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones');
    ul.innerHTML = ''; // Limpiar la lista antes de volver a mostrar
    

    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}
window.onload = function() {
    mostrarCertificaciones();
};

// Función para agregar un nuevo certificado
function agregarCertificado() {
    let nuevoCertificado = prompt('Ingrese el nombre del nuevo certificado:');
    if (nuevoCertificado) {
        certificaciones.push(nuevoCertificado);
        mostrarCertificaciones(); // Vuelve a mostrar la lista actualizada
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Agregar habilidades
    document.getElementById('addSkill').addEventListener('click', agregarHabilidad);

    // Manejar el botón de contacto
    var contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', manejarBotonContacto);
    }

    // Mostrar certificaciones
    document.getElementById('mostrarCertificacionesButton').addEventListener('click', mostrarCertificaciones);

    // Agregar certificado
    document.getElementById('addCertificateButton').addEventListener('click', agregarCertificado);
});

// Variable para almacenar certificaciones
let certificaciones = [];

function saludoPersonalizado() {
    alert("¡Gracias por visitar mi sección de experiencia laboral!");
}