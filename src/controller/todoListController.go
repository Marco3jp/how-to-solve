package controller

import (
	"net/http"

	"../module"
	"../view"
	"strconv"
)


type TodoListController struct {
	*BaseController
}

func (self TodoListController) GetTodoList(w http.ResponseWriter, r *http.Request)  {
	genreId,err := strconv.Atoi(r.URL.Query().Get("genreId"))

	if err!=nil{
		panic(err)
	}

	todoListJson := module.TodoListModule {self.DB}.GetTodoList(&genreId)

	view.GetTodoList(todoListJson,w)
}