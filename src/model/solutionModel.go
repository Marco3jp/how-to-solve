package model

type Solution struct {
	Description *string `json:"description"`
	Examples *[]SolutionExample `json:"sample"`
	Links *[]string `json:"link"`
}