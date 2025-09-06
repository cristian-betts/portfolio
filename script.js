// Guardamos los progresos por ID de barra
let progressValues = {
  bar1: 0,
  bar2: 0,
  bar3: 0,
  bar4: 0,
  bar5: 0,
  bar6: 0
};

function increaseProgress(barId) {
  if (progressValues[barId] < 100) {
    progressValues[barId] += 10;
    updateBar(barId);
  }
}

function resetProgress(barId) {
  progressValues[barId] = 0;
  updateBar(barId);
}

function updateBar(barId) {
  const bar = document.getElementById(barId);
  if (bar) { 
    bar.style.width = progressValues[barId] + "%";
    bar.textContent = progressValues[barId] + "%";
  } else {
    console.error("No existe un elemento con id:", barId);
}
}

//validación del formulario
const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const celular = document.getElementById("celular");
const direccion = document.getElementById("direccion");
const contacto = document.getElementById("contacto");

const errorNombre = document.getElementById("errorNombre");
const errorMail = document.getElementById("errorMail");
const errorTelefono = document.getElementById("errorTelefono");
const errorCelular = document.getElementById("errorCelular");
const errorDireccion = document.getElementById("errorDireccion");
const errorContacto = document.getElementById("errorContacto");

nombre.addEventListener("input", () => {
  errorNombre.textContent = nombre.value.trim().length < 3 ? "Mínimo 3 caracteres" : "";
});

mail.addEventListener("input", () => {
  errorMail.textContent = mail.validity.typeMismatch ? "Formato de correo inválido" : "";
});

telefono.addEventListener("input", () => {
  errorTelefono.textContent = telefono.value.length < 7 ? "Mínimo 7 dígitos" : "";
});

celular.addEventListener("input", () => {
  errorCelular.textContent = celular.value.length < 10 ? "Debe tener 10 dígitos" : "";
});

direccion.addEventListener("input", () => {
  errorDireccion.textContent = direccion.value.trim() === "" ? "Campo requerido" : "";
});

contacto.addEventListener("change", () => {
  errorContacto.textContent = contacto.value === "" ? "Seleccione una opción" : "";
});

document.getElementById("miFormulario").addEventListener("submit", (e) => {
  if (
    nombre.value.trim().length < 3 ||
    mail.validity.typeMismatch ||
    telefono.value.length < 7 ||
    celular.value.length < 10 ||
    direccion.value.trim() === "" ||
    contacto.value === ""
  ) {
    e.preventDefault(); 
    alert("Por favor corrige los errores antes de enviar");
  }
    else {
        alert("Formulario enviado correctamente");
        e.target.reset();
    }
});

//menu hamburguesa responsive
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  const links = document.querySelectorAll("#nav-links a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}