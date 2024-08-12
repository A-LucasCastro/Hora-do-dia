function carregar() {
    let msg = document.querySelector('#mensagem')
    let img = document.querySelector('#imagem')
    let msgHorario = document.querySelector('#mensagem-horario')
    let footer = document.querySelector('#footer')
    let agora = new Date()
    let hora = agora.getHours()

    function atualizaHora() {
        let data = new Date()
        let horaAgora = data.getHours()
        const minuto = data.getMinutes()
        const segundos = data.getSeconds()

        msg.innerHTML = `Agora são ${horaAgora}:${minuto}:${segundos}`
    }

    atualizaHora()

    setInterval(() => {
        atualizaHora();
    }, 1000)

    if (hora >= 0 && hora < 12) {
        img.src = '../img/fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        document.body.style.color = '#e2cd9f'
        msgHorario.innerHTML = 'Manhã'
        footer.style.color = '#515154'
        
        if (hora_atual == 1 || hora_atual >= 0 && hora_atual <= 9) {
            mensagem.innerHTML = `Agora são ${hora_atual}:00 hora`
            mensagem.innerHTML = `Agora são 0${hora_atual}:00 hora`
        }

    } else if (hora >= 12 && hora < 18) {
        img.src = '../img/fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
        document.body.style.color = '#b9846f'
        msgHorario.innerHTML = 'Tarde'
        footer.style.color = '#515154'
    } else {
        img.src = '../img/fotonoite.png'
        document.body.style.backgroundColor = '#515154'
        document.body.style.color = '#515154'
        msgHorario.innerHTML = 'Noite'
        footer.style.color = '#515154'
    }
}