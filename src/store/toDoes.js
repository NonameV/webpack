import shortid from 'shortid';
class ToDoes {
    constructor(){
        this.toDoList = [];
        this.currentToDO = {};
        this.toDoDescList = null;
    }
    addNewToDo(taskName, taskDesc){
        this.toDoList.push({
            taskName,
            taskDesc,
            id: shortid.generate()
        });
    }
    removeToDo(id){
        this.toDoList = this.toDoList.filter(e => e.id != id);
    }
    showToDoDesc(id){
        this.toDoDescList = this.toDoList.filter(e => e.id == id)[0].taskDesc;
    }
}

const toDoesStore = new ToDoes();

export default toDoesStore;