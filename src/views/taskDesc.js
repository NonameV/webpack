class TaskDescUI{
    constructor(){
        this.container = document.querySelector('.task-description');
    }
    static taskDescTemplate(desc){
        return `<p>${desc}</p>`
    }
    clearDesc(){
        this.container.innerHTML = '';
    }
    renderTaskDesc(desc){
        this.clearDesc();
        this.container.innerHTML = TaskDescUI.taskDescTemplate(desc);
    }
}

const taskDescUI = new TaskDescUI();

export default taskDescUI;