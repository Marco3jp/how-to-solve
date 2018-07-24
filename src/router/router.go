package router

import (
	"database/sql"
	"github.com/gorilla/mux"

	"../controller"
)

func Init(db *sql.DB) *mux.Router {
	r := mux.NewRouter()
	baseController := controller.NewBaseController(db)

	r = r.PathPrefix("/api").Subrouter()

	r.HandleFunc("/config", controller.ConfigController{baseController}.GetConfig).Methods("GET")

	r.HandleFunc("/genreList", controller.GenreListController{baseController}.GetGenreList).Methods("GET")

	r.HandleFunc("/todoList", controller.TodoListController{baseController}.GetTodoList).Methods("GET")

	r.HandleFunc("/todoSolution", controller.SolutionController{baseController}.GetSolution).Methods("GET")

	return r
}
