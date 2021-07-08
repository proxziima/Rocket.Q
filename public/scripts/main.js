import { Modal} from './modal'

const modal = Modal()

//Pegar todos os botões que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button =>{
    //Adicionar o event listener em cada botão
    button.eventlistener('click', {
        // Abril a modal
        modal.open()
    })
})



