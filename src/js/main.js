let __ALTURA = window.innerHeight;
let __LARGURA = window.innerWidth

let imagem = document.getElementById('imagem')

let perfil = document.getElementById('perfil');

let text = document.getElementById('principal')

text.style.width = `${__LARGURA}px`
text.style.height = `${__ALTURA}px`

if (localStorage.getItem('perfil') == null) {
    
    perfil.innerHTML = 'usúario não definido'
    perfil.style.color = "white"

}  else{

    perfil.innerHTML = localStorage.getItem('perfil')
    perfil.style.color = "white"

}


const nav = document.getElementById('navegacao')


console.log(__ALTURA.toString());
//nav.style.maxHeight = `${__ALTURA}px`;

nav.style.height = `${__ALTURA}px`