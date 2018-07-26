class todoView {
    constructor(){
        this.todoListElement = document.querySelector(".selectionB");
    }

    displayAll(todoList){
        if(todoList.result){
            this.displayTodo(todoList.todo);
        }
    }

    displayTodo(todo){
        for (let i = 0; i < todo.length; i++) {
            let newTodoElement = document.createElement("li");
            let todoElement = this.todoListElement.appendChild(newTodoElement);
            todoElement.textContent = todo[i].todo_name;
            todoElement.dataset.todoId = todo[i].todo_id;
            todoElement.dataset.genreId = todo[i].genre_id;
        }
    }
}

let TodoView = new todoView();