function logar(id) {

    let form = document.getElementById(id)

    localStorage.setItem('perfil' , form.nome.value)

}

function validar(id) {

    let valido = true; 

    let form = document.getElementById(id)

    if (form.nome.value.trim() == ""){ 
        
        valido = false
        form.nome.focus()
        alert('erro no nome')

    }
    if(form.imagem.value.trim() == "") {
        
        valido = false
        form.imagem.focus()
        alert('erro na imagem')

    }

    return valido;
    
}