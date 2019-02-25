import { observable, action, decorate } from 'mobx';
import {Task} from '../Models/Task';

export class TaskViewModel{

    constructor(){
        this.load();
    }

    tasks = [];

    add(){
        const newTask = new Task();
        this.tasks.push(newTask);
        return newTask;
    }

    remove(task: Task){
        const index = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index, 1);
        }
    }

    
    load(){
        const json = JSON.parse(window.localStorage.getItem("tasks") || "[]");

        this.tasks = json.map(task => Task.deserialize(task))
    }

    save(){
        if(this.tasks.filter(task => task.isValid === false).length > 0){
            alert("unable to save: There are invalid Tasks.")
        }

        if(window.localStorage){
            window.localStorage.setItem("tasks", JSON.stringify(this.tasks.map(task => task.serialize())))
        }
    }

}

decorate(TaskViewModel, {
    tasks: observable ,
    add: action,
    remove: action,
    load: action,
    save: action
})
