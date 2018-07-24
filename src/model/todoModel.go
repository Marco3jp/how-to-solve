package model

type Todo struct {
	TodoName string `json:"todo_name"`
	TodoID int`json:"todo_id"`
	GenreID int `json:"genre_id"`
}

type TodoList struct{
	Todo []Todo `json:"todo"`
	Result bool `json:"result"`
}