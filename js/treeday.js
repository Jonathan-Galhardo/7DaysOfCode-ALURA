//Arquivo js 3 dia 

// Nome do Usuário 
let nome = prompt('Qual seu nome? ')

// Qual área quer seguir? 
let area = prompt(`Olá ${nome} você quer seguir o caminho do Front-end ou Back-end? `)

// Resposta Front-End
if (area == 'Front' || area == 'front' || area == 'Frontend' || area == 'Front-end' || area == 'front-end'){
    let frameWork = prompt(`Ótimo ${nome} dentro do Front-End você quer estudar React ou Vue? `)
    // resposta React 
    if (frameWork == 'React' || frameWork == 'react'){
        let react = prompt(`Ótimo ${nome} O React é amplamente usado no mercado. Empresas como Facebook, Walmart, Instagram, Artsy, Coinbase Pro, Airbnb, Tesla, Discord utilizam essa tecnologia. Após Estudar React ${nome}, você quer continuar 
        se especializando no Front-end ou deseja ser FullStack?`)}
    //resposta Vue
    if (frameWork == 'vue' || frameWork == 'Vue'){
        let vue = prompt(`Ótimo ${nome} O Vue.js é um framework Javascript open source bastante conhecido pela sua reatividade. Usado para construir SPA (Single Page Applications) e interfaces de usuário, tornou-se uma excelente opção, 
        também, pelo fato de ter componentes reutilizáveis e proporcionar o desenvolvimento ágil. Após Estudar Vue ${nome}, você quer continuar 
        se especializando no Front-end ou deseja ser FullStack?`)}
}
    
 // continuaar no front
 
// Resposta Back-End
if (area == 'Back' || area == 'Back-end' || area == 'backend' || area == 'Froback-end' || area == 'back' || area == 'back-end'){
    let backEnd = prompt(`Ótimo ${nome} dentro do Front-End você quer estudar C# ou Java? `)
    // resposta React 
    if (backEnd == 'C#' || backEnd == 'C' || backEnd == 'c' || backEnd == 'c#'){
        let react = prompt(`Ótimo ${nome} O C# é amplamente usado no mercado. Após Estudar React ${nome}, você quer continuar se especializando no Back-end ou deseja ser FullStack?`)}
    //resposta Vue
    if (backEnd == 'Java' || backEnd == 'java'){
        let vue = prompt(`Ótimo ${nome} O Java é. Após Estudar Vue ${nome}, você quer continuar se especializando no Front-end ou deseja ser FullStack?`)}
}
        
 