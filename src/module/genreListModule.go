package module

import (
	"database/sql"
	"../model"
	"encoding/json"
	"fmt"
)

type GenreListModule struct {
	DB *sql.DB
}

func (self GenreListModule) GetGenreList() *[]byte {
	var(
		genreList model.GenreList
		tempGenre model.Genre
	)

	rows,err := self.DB.Query("select * from genre_list")

	if err!=nil{
		genreList.Result = false
		fmt.Printf("noData!")
	}else{
		genreList.Result = true
		for rows.Next(){
			if err = rows.Scan(&tempGenre.GenreName,&tempGenre.GenreID);err==nil{
				genreList.Genre = append(genreList.Genre,tempGenre)
			}
		}
	}

	configJson,err := json.Marshal(genreList)

	if err != nil {
		panic(err)
	}

	return &configJson
}