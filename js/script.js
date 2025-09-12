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


const correoBtn = document.getElementById('btn-pedido');
const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (correoBtn) {
  if (esMovil) {
    correoBtn.href = "mailto:bioyukapa@gmail.com";
  } else {
    correoBtn.href = "https://mail.google.com/mail/?view=cm&to=bioyukapa@gmail.com";
    correoBtn.target = "_blank";
  }
}

var Carousel3D = (function() {
    'use strict';

    var carousel, 
        carouselImages,
        prevBtn, 
        nextBtn,
        panelCount,
        theta = 0,
        isAnimating = false,
        autoRotateInterval = null,
        autoRotateActive = false;

    function init() {
        carousel = document.querySelector('.carousel-images');
        carouselImages = carousel.querySelectorAll('img');
        prevBtn = document.getElementById('prev');
        nextBtn = document.getElementById('next');
        panelCount = carouselImages.length;

        if (!carousel || !prevBtn || !nextBtn) {
            console.warn('Elementos del carrusel 3D no encontrados');
            return;
        }

        bindEvents();
        
        updateCarousel();
        
        console.log('Carrusel 3D iniciado con', panelCount, 'imágenes');
        
        //toggleAutoRotate();
    }

    function bindEvents() {
        
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateCarousel(-1);
        });

        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateCarousel(1);
        });

        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigateCarousel(-1);
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigateCarousel(1);
            }
            if (e.key === ' ') { 
                e.preventDefault();
                toggleAutoRotate();
            }
        });

        
        carousel.addEventListener('mouseenter', function() {
            if (autoRotateActive) {
                clearInterval(autoRotateInterval);
            }
        });

        carousel.addEventListener('mouseleave', function() {
            if (autoRotateActive) {
                startAutoRotate();
            }
        });

        addTouchSupport();
    }

    function navigateCarousel(increment) {
        if (isAnimating) return;
        
        isAnimating = true;
        
        var angleIncrement = (360 / panelCount) * increment;
        theta += angleIncrement;
        
        updateCarousel();
        
        var button = increment === 1 ? nextBtn : prevBtn;
        button.style.transform = 'translateZ(60px) scale(0.9)';
        
        setTimeout(function() {
            button.style.transform = '';
            isAnimating = false;
        }, 300);
        
        console.log('Navegación - Ángulo actual:', theta + '°');
    }

    function updateCarousel() {
        if (carousel) {
            carousel.style.transform = 'translateZ(-288px) rotateY(' + theta + 'deg)';
        }
    }

    function addTouchSupport() {
        var startX = 0;
        var currentX = 0;
        var isDragging = false;
        var threshold = 50; 

        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            
            if (autoRotateActive) {
                clearInterval(autoRotateInterval);
            }
        });

        carousel.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', function(e) {
            if (!isDragging) return;
            isDragging = false;
            
            var diff = startX - currentX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    navigateCarousel(1); 
                } else {
                    navigateCarousel(-1);
                }
            }
            
            if (autoRotateActive) {
                setTimeout(function() {
                    startAutoRotate();
                }, 500);
            }
        });
    }

    
    function startAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
        
        autoRotateInterval = setInterval(function() {
            navigateCarousel(1);
        }, 3000); 
    }

    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }

    function toggleAutoRotate() {
        if (autoRotateActive) {
            stopAutoRotate();
            carousel.classList.remove('rotate-animation');
            autoRotateActive = false;
            console.log('Auto-rotación desactivada');
        } else {
            startAutoRotate();
            autoRotateActive = true;
            console.log('Auto-rotación activada');
        }
    }

    
    return {
        init: init,
        navigate: navigateCarousel,
        toggleAutoRotate: toggleAutoRotate,
        getCurrentAngle: function() { return theta; },
        setSpeed: function(speed) {
            
            carousel.classList.remove('rotate-animation', 'rotate-fast', 'rotate-slow');
            
            switch(speed) {
                case 'fast':
                    carousel.classList.add('rotate-fast');
                    break;
                case 'slow':
                    carousel.classList.add('rotate-slow');
                    break;
                default:
                    carousel.classList.add('rotate-animation');
            }
        }
    };
})();


document.addEventListener('DOMContentLoaded', function() {
    Carousel3D.init();
});

if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(function($) {
        Carousel3D.init();
    });
}

function carousel3DNavigate(direction) {
    Carousel3D.navigate(direction);
}

function carousel3DToggleAuto() {
    Carousel3D.toggleAutoRotate();
}

function carousel3DSetSpeed(speed) {
    Carousel3D.setSpeed(speed);
}



