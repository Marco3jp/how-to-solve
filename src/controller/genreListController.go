package controller

import (
	"net/http"
	"../module"
	"../view"
)

type GenreListController struct {
	*BaseController
}

func (self GenreListController) GetGenreList(w http.ResponseWriter, r *http.Request)  {
	genreListJson := module.GenreListModule{self.DB}.GetGenreList()

	view.GetGenreList(genreListJson,w)
}