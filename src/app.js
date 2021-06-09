import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.scss';
import toDoesStore from './store/toDoes';
import taskUI from './views/task';
import uiConfig from './config/ui.config';
import {isValid} from './helpers/formValidation'


const {titleInput, descInput, form} = uiConfig;
const inputsArr = [titleInput, descInput];


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(ofFormSubmit()){
        toDoesStore.addNewToDo(this.querySelector('#email').value, this.querySelector('#desc').value);
        taskUI.renderTasks(toDoesStore.toDoList);
    }
    
    
})
document.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        toDoesStore.removeToDO(e.target.parentElement.dataset.id);
        taskUI.renderTasks(toDoesStore.toDoList);
    }
})

function ofFormSubmit(){
    const validForm = inputsArr.every(e => {
       const validSwitcher = isValid(e);
        if(!validSwitcher){
            
        }
       return validSwitcher;
    })
    return validForm;
}



