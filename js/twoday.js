function enviar(){
    let nomeUsuario = window.document.getElementById('nome').value
    let idadeUsuario = window.document.getElementById('idade').value
    let linguagemEstudo = window.document.getElementById('linguagem').value
    let resposta = `Olá ${nomeUsuario}, você tem ${idadeUsuario} anos e está aprendendo ${linguagemEstudo}` 
    res.innerHTML = resposta

    let respostaPergunta = prompt(`${nomeUsuario} você gosta de estudar ${linguagemEstudo}? Responda 1 para "Sim" e 2 para "Não"`)
    if (respostaPergunta == 1 || respostaPergunta == '1'){       
        sim.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.'
    } else {
        sim.innerHTML = 'Ahh que pena...'
        let pergunta2 = prompt('Já tentou aprender outras linguagens? Responda 1 para "Sim" e 2 para "Não"')
            if (pergunta2 == 1 || pergunta2 =='1'){
                sim.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso, mas lembre-se que a constância é fundamental.'
            } else {
                sim.innerHTML = 'Ahh que pena, mas não desista! Todo dia é uma nova oportunidade'
            }
    }
} 


