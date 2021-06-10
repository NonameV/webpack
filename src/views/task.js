
class TaskUI{
    constructor(){
        this.container = document.querySelector('.tasks-list');
    }
    renderTasks(tasks){
        if(!tasks.length) {
            this.clearTaskContainer();
            return;
        }
        this.clearTaskContainer();
        tasks.forEach(e => {
            this.container.innerHTML += TaskUI.taskTemplate(e); 
        })
    }
    static taskTemplate({taskName, taskDesc, id}){
        return `<div class='task' data-id='${id}'>
            <h4 class='click-email'>${taskName}</h4>
            <p>${taskDesc}</p>
            <span class='delete'>delete</span>
        </div> <hr/>`
    }
    clearTaskContainer(){
        this.container.innerHTML = '';
    }
}

const taskUI = new TaskUI();

export default taskUI;