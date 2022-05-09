const html = document.getElementById('html')
html.addEventListener('load', modohora())
html.addEventListener('scroll', fixarNavBar())
function mudaridade(){
    const idade = document.getElementById('idade')
    let data = new Date()
    let ano = data.getFullYear()
    let idadeAtual = ano - 2005
    
    idade.innerHTML = ": " + idadeAtual
}
html.addEventListener('load', mudaridade())

function modo_dark(){
    html.classList.toggle('dark-mode')
    
    const button_dark = document.getElementById('button-dark-mode')
    button_dark.classList.toggle('modo-dark')
    
    const icon_dark = document.getElementById('icon-dark-mode')
    
    if(icon_dark.classList.contains('fa-moon')){
        icon_dark.classList.remove('fa-moon')
        icon_dark.classList.add('fa-sun')
    } else {
        icon_dark.classList.remove('fa-sun')
        icon_dark.classList.add('fa-moon')
    }
}
function aparecer(){
    const fig = document.getElementById('figure')
    fig.style.opacity = '1'
}
function modohora(){
    var data = new Date()
    var hora = data.getHours()

    if(hora < 6 || hora > 17){
        const dark = document.getElementById('html')
        dark.classList.add('dark-mode')
        const button_dark = document.getElementById('button-dark-mode')
        button_dark.classList.toggle('modo-dark')
        
        const icon_dark = document.getElementById('icon-dark-mode')
        
        if(icon_dark.classList.contains('fa-moon')){
            icon_dark.classList.remove('fa-moon')
            icon_dark.classList.add('fa-sun')
        } else {
            icon_dark.classList.remove('fa-sun')
            icon_dark.classList.add('fa-moon')
        }
    }
}
window.onscroll = function() {fixarNavBar()};
function fixarNavBar(){
    let menu = document.getElementById("inicio")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.style.position = 'fixed'
        menu.classList.add('header-top-fixed')
    } else {
        menu.style.position = 'unset'
        menu.classList.remove('header-top-fixed')
    }

    let topBnt = document.getElementById('bntBackToTop')
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topBnt.style.opacity = '1'
        topBnt.style.cursor = 'pointer'
    } else {
        topBnt.style.opacity = '0'
        topBnt.style.cursor = 'default'
    }
}

function backToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function menu(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('menu-estendido')
}
function fecharMenu(){
    let fmenu = document.getElementById('menu')
    fmenu.classList.remove('menu-estendido')
}
