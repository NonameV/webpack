import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.scss';
import toDoesStore from './store/toDoes';
import taskUI from './views/task';
import uiConfig from './config/ui.config';
import {isValid} from './helpers/formValidation';
import formUI from './views/form';


const {titleInput, descInput, form} = uiConfig;
const inputsArr = [titleInput, descInput];



form.addEventListener('submit', function(e){
    e.preventDefault();
    if(onFormSubmit()){
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

function onFormSubmit(){
    const validForm = inputsArr.every(e => {
       let validSwitcher = isValid(e);
       return validSwitcher;
    })
    inputsArr.forEach(e => {
        if(isValid(e)){
            formUI.removeInValidMessage(e);
        }else{
            formUI.addInValidMessage(e);
        }
    })
    return validForm;
}



