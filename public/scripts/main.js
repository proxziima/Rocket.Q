import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a class check
const checkButton = document.querySelectorAll(".actions a.check")

//Pegar todos os botões que existe com a class cancel
// const cancelButton = document.querySelector('.button.cancel')

//Percorre todos os botões check ouvindo o evento click para abrir o modal
checkButton.forEach( button =>{
    //Adicionar o event listener em cada botão
    button.addEventListener('click', handleClick)
})

//Ouve o evento click dos botões cancel para fechar o modal

// cancelButton.addEventListener('click', modal.close)

const deleteButton = document.querySelectorAll('.actions a.delete')

//Percorre todos os botões delete ouvindo o evento click para abrir o modal
deleteButton.forEach( button =>{
    //Adicionar o event listener em cada botão
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id

    const roomId = document.querySelector("#room-id").dataset.id 

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML =  `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza de que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    // Abrir o modal
    modal.open() 
}

