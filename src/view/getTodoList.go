package view

import (
	"net/http"
	"fmt"
)

func GetTodoList(todoListJson *[]byte,w http.ResponseWriter)  {
    w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w,string(*todoListJson))
}
