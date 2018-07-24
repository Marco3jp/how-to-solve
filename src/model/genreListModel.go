package model

type Genre struct {
	GenreName string      `json:"genre_name"`
	GenreID        int         `json:"genre_id"`
}

type GenreList struct {
	Genre []Genre `json:"genre"`
	Result bool `json:"result"`
}