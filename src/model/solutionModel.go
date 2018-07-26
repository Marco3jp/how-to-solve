package model

type Solution struct {
	Description *string `json:"description"`
	Examples *[]SolutionExample `json:"example"`
	Links *[]string `json:"link"`
}
