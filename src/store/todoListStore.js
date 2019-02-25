import { observable } from "mobx";

class ToDoTaskStore {

    @observable todoList = [{task:"reading"},{task:"working"},{task:"applying"}]
}

export default new ToDoTaskStore;