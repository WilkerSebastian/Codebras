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

    if (localStorage.getItem('curso') == null) {

        localStorage.setItem('curso', comprado)

    } else {

       if(localStorage.getItem('curso') == 'false'){

        comprado = false

       }else{

        comprado = true

       }

    }

}

function qualFalta() {

    if (!comprado) {

        nocom.style.display = "block"

    }
    if (localStorage.getItem('perfil') == null) {

        noperf.style.display = "block"

    }
    if(comprado){

        val.style.display = "block"

    }else{

        val.style.display = "none"

    }

}

validarCurso();
qualFalta();