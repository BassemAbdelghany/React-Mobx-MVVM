import { observable, computed, decorate } from 'mobx';

let _uuid = 0;

function generateID(){
    _uuid++;
    return _uuid;
}

export class Task{
    id = generateID();
    text = '';
    status = false;

    get isValid(){
        return this.text !== '';
    }

    serialize(){
        return {
            id: this.id,
            text: this.text,
            status: this.status
        }
    }

    static deserialize(json: Object){

        const task = new Task()
        console.log(json)
        task.id = json['id'] || generateID();
        task.text = json['text'] || '';
        task.status = json['status'] || false
        return task;
    }
}

decorate(Task, {
    text:observable,
    status:observable,
    isValid:computed
})