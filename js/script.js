const header = document.querySelector("header");

window.addEventListener("scroll", function (){
    header.classList.toggle("sticky", this.window.scrollY > 60)
})

/* agregrar un evento click al elemento de clase btn

document.querySelector('.btn').addEventListener("click", function(){
    alert('¡Contactando con desarrollador!')
})

// agregrar un evento click a cada uno de los elementos encontrados de clase .btn
document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click', function(){
        alert('¡Contactando con desarrollador!')
    })
})*/

// funcion para el boton 'pedido'
document.getElementById('btn-pedido').addEventListener('click', function(){
    alert('¡Contactando con personal!')
})

// funcion para el boton 'promocion'
document.getElementById('btn-promocion').addEventListener('click', function(){
    alert('¡redirigiendo a la promoción, espere por favor!')
})


document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault();
        // desplazamoeto suave
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const imagenesJahr = [
  "img/imginicio1.webp",
  "img/imginicio2.webp",
  "img/imginicio3.webp",
  "img/imginicio4.webp",
  "img/imginicio5.webp"
];

let indiceImagen = 0;
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');

let showingBg1 = true;

// Ponemos la primera imagen en bg1
bg1.style.backgroundImage = `url(${imagenesJahr[indiceImagen]})`;
indiceImagen = (indiceImagen + 1) % imagenesJahr.length;

function cambiarFondoJahr() {
  const nextImage = new Image();
  nextImage.src = imagenesJahr[indiceImagen];

  nextImage.onload = () => {
    if (showingBg1) {
      bg2.style.backgroundImage = `url(${nextImage.src})`;
      bg2.style.opacity = 1;
      bg1.style.opacity = 0;
    } else {
      bg1.style.backgroundImage = `url(${nextImage.src})`;
      bg1.style.opacity = 1;
      bg2.style.opacity = 0;
    }

    indiceImagen = (indiceImagen + 1) % imagenesJahr.length;
    showingBg1 = !showingBg1;
  };
}


// Cambiar cada 5 segundos
setInterval(cambiarFondoJahr, 5000);

// Menú para pantallas pequeñas 
let menujahr = document.querySelector('#menu-icon');
let navbarjahr = document.querySelector('.navbar');
let enlacesjahr = document.querySelectorAll('.navbar a');

menujahr.onclick = () => {
    navbarjahr.classList.toggle('open')
    menujahr.classList.toggle('bx-x')
}

enlacesjahr.forEach(link => {
    link.onclick = () => {
        navbarjahr.classList.remove('open')
        menujahr.classList.remove('bx-x')
    }
})



var typed = new Typed('#typed', {
     strings: [
        'Protección natural para tus frutas',
        'Alarga la vida de tus productos',
        'Biotecnología con almidón de yuca',
        'Cuidamos tus alimentos, cuidamos el planeta',
        'Frutas más frescas por más tiempo',
        'Soluciones sostenibles para el futuro'
    ],
    typeSpeed: 40,
    loop: "true",
    backSpeed: 20,
});


// js/script.js
const correoBtn = document.getElementById('correo-btn');
const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (correoBtn) {
  if (esMovil) {
    correoBtn.href = "mailto:bioyucapa@gmail.com";
  } else {
    correoBtn.href = "https://mail.google.com/mail/?view=cm&to=bioyucapa@gmail.com";
    correoBtn.target = "_blank";
  }
}
