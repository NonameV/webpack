import shortid from 'shortid';
class ToDoes {
    constructor(){
        this.toDoList = [];
        this.currentToDO = {};
    }
    addNewToDo(taskName, taskDesc){
        this.toDoList.push({
            taskName,
            taskDesc,
            id: shortid.generate()
        });
    }
    removeToDO(id){
        this.toDoList = this.toDoList.filter(e => e.id != id);
    }
    
}

const toDoesStore = new ToDoes();

export default toDoesStore;