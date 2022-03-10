
function abrirModal(projeto){
    const infor = document.getElementById(`informacoes${projeto}`)
    infor.style.display = 'block'
    infor.style.transition = '1s'
    infor.animate([
        {opacity: '0'},
        {opacity: '1'}
    ],{
        duration: 100,
    })

    const fechar = document.getElementById(`fecharModal${projeto}`)
    fechar.addEventListener('click', function(){
        infor.style.display = 'none'
    })
}