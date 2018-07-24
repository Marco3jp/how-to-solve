package module

import (
	"database/sql"
	"../model"
	"encoding/json"
	"fmt"
)

type TodoListModule struct {
	DB *sql.DB
}

func (self TodoListModule) GetTodoList(genreId *int) *[]byte {

	var(
		todoList model.TodoList
		tempTodo model.Todo
	)

	rows,err := self.DB.Query("select * from todo where genre_id = ?",genreId)

	if err!=nil{
		todoList.Result = false
		fmt.Printf("noData!")
	}else{
		for rows.Next(){
			if err = rows.Scan(&tempTodo.TodoID,&tempTodo.TodoName,&tempTodo.GenreID);err==nil{
				todoList.Todo = append(todoList.Todo,tempTodo)
			}
		}

		if todoList.Todo != nil {
			todoList.Result = true
		}else{
			todoList.Result = false
		}
	}

	configJson,err := json.Marshal(todoList)

	if err != nil {
		panic(err)
	}

	return &configJson
}