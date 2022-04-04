function logar(id) {

    let form = document.getElementById(id)

    console.log(form.nome.value);
    localStorage.setItem('perfil' , form.nome.value)

}

function validar() {

    let valido = true; 

    const nomes = ["nome" , "email" , "senha" , "senha_confirmada"]

    let form = document.forms["cad"]

    let pass

    let passc

    nomes.forEach(e => {

        if (e == "senha") {
            
            pass = form[e].value

        }

        if (e == "senha_confirmada") {

            passc = form[e].value
            
        }

        if (form[e].value.trim() == "") {
            
            form[e].focus()
            form[e].style.backgroundColor = "red"
            form[e].style.color = "white"
            valido = false;

        }
        
    });

    if (pass != passc) {
        
        valido = false;
        form["senha_confirmada"].focus()
        form["senha_confirmada"].style.backgroundColor = "red"
        form["senha_confirmada"].style.color = "white"

    }

    return valido;
    
}