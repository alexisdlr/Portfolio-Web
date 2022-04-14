let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        this.document.querySelector('#header').style.top = '0';
        this.document.querySelector('#header').classList.add('scroll');

    }
    else {
        this.document.querySelector('#header').style.top = '-150px';
    }
    ubicacionPrincipal = desplazamiento;
}