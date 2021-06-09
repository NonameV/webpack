
class FormUI{
    constructor(){

    }
    
    static invalidTemplate(message){
        return `<div class="invalid-feedback-message">
        ${message}
      </div>`
    }
    addInValidMessage(e){
        if(e.parentElement.querySelector('.invalid-feedback-message')){
            e.parentElement.removeChild(document.querySelector('.invalid-feedback-message'));
        }
        e.insertAdjacentHTML('afterend', FormUI.invalidTemplate(e.dataset.invalidValue));
    }
    removeInValidMessage(e){
        const inputParent = e.parentElement;
        const message = inputParent.querySelector('.invalid-feedback-message')
        if(message){
            inputParent.removeChild(message);
        }
    }
}

const formUI = new FormUI();

export default formUI;