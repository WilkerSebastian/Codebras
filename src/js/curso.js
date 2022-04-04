let comprado = false;

let val = document.getElementById('val')
val.style.display = "none"

let inva = document.getElementById('inva')
val.style.display = "none"

let nocom = document.getElementById('nocom')
nocom.style.display = "none"

let noperf = document.getElementById('noperf')
noperf.style.display = "none"

function validarCurso() {

    if (localStorage.getItem('perfil') == null) {

        comprado = false;
        localStorage.setItem('curso', String(comprado))

    }
    if (localStorage.getItem('curso') == null) {

        comprado = false;
        localStorage.setItem('curso', String(comprado))

    } else {

        comprado = Boolean(localStorage.getItem('curso'));

    }

    if (comprado) {

        val.style.display = "block"

    } else {

        inva.style.display = "block"

    }

}

validarCurso();

function qualFalta() {

    if (!comprado) {

        nocom.style.display = "block"

    } else if (localStorage.getItem('perfil') == null) {

        noperf.style.display = "block"

    } else {

        val.style.display = "block"

    }

}