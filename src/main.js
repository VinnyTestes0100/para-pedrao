const frasePerdao = document.querySelector('#perdaoFrase')
const simBtn = document.querySelector('#simPerdoo')
const naoBtn = document.querySelector('#naoPerdoo')
const btns = document.querySelector('.botoes')

naoBtn.onmouseenter = mudarPosicao
simBtn.onclick = perdoou

let qntDeNao = 0
function mudarPosicao() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    do {
       positionX = Number((Math.random() * 1800).toFixed(0))
    } while (positionX >= windowWidth / 2);

    if (positionX > (windowWidth/2)/2) {
        positionX = positionX * -1
    }
    
    do {
       positionY = Number((Math.random() * 1000).toFixed(0))
    } while (positionY >= windowHeight / 2);

    if (positionY > (windowHeight/2)/2) {
        positionY = positionY * -1
    }

    naoBtn.style.transform = `translate(${positionX}px, ${positionY}px)`
    qntDeNao++
    console.log(qntDeNao)

    if(qntDeNao == 1) {
        frasePerdao.innerHTML = "Qual foi cara, pfv mano '_'"
    }
    if(qntDeNao == 2) {
        frasePerdao.innerHTML = "Pô cara, eu te amo <3, bora conversar"
    }
    if(qntDeNao == 5) {
        frasePerdao.innerHTML = "Vou te trocar pelo irmão da bainada em, cuidado... Mentira, nunca iria fazer isso =) "
    }
    if(qntDeNao == 10) {
        frasePerdao.innerHTML = "Porfavorzinho cara, so uma conversinha cawra =("
    }
    if(qntDeNao == 17) {
        frasePerdao.innerHTML = "Para de tentar clicar no não pfv, quero me resolver com você Pedro, de verdade mesmo, esclarece pra mim de uma vez, eu quero te escutar"
    }
    if(qntDeNao == 30) {
        frasePerdao.innerHTML = "A conversa é a base de tudo, lembra? Vamo resolver juntos cara, tipo o relâmpago marquinho e o tomate. Catiau" 
    }
    if(qntDeNao == 50) {
        frasePerdao.innerHTML = "Caramba seu estrume de boi podre, ta tentando ainda? Já foram 50 nãos, vai catar coquinho então na na casa ja mãe joana, seu bananão, desculpa pelo vocabulario tchulo, mas acho que a situação permite, seu beta bluepiil, ruim no RL"
    }
    if(qntDeNao == 75) {
        frasePerdao.innerHTML = "75 já irmão, vai me dar nenhuma chance msm, vai ficar bravo e nem falar cmg?"
    }
    if(qntDeNao == 100) {
        frasePerdao.innerHTML = "Tá Pedro, tu venceu mano, só me avisa se você tiver chegado até aqui, ja foi 100 veze sabia? Só queria conversar com você cara, mas beleza, ainda assim vou te amar pra sempre, quando quiser tô aqui mano, e porfavor, vamo conversar sobre isso o mais rápido possível, e não tem mais depois pode ficar traquilo, =3 seu bobão, isso mesmo!!! <br> <a href='https://wa.me/5533997326202'>"

        simBtn.disabled = true
        naoBtn.disabled = true
    }
}
function perdoou() {
    console.log('Perdoou')
    btns.style.display = 'none'
    frasePerdao.innerHTML = "Obrigado Pedro, fico até mais feliz, mas você tem que me avisar agora, porque não sei mandar notificação ainda. <a href='https://wa.me/5533997326202'>Me avisa pelo uatizap fiu fiu fiu fiufiu</a> e vamo conversar sobre isso, vou ficar melhor depois de conversar com você, pfv" 
}