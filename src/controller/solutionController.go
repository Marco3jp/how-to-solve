package controller

import (
	"net/http"

	"../module"
	"../view"
	"strconv"
	"fmt"
)

type SolutionController struct {
	*BaseController
}

func (self SolutionController) GetSolution(w http.ResponseWriter, r *http.Request)  {

	todoId,err := strconv.Atoi(r.URL.Query().Get("todoId"))

	if err != nil{
		fmt.Printf("you mistake to input query(todoId)")
	}

	description := module.DescriptionModule{self.DB}.GetDescription(&todoId) // *string

	links, linkExist := module.LinkModule{self.DB}.GetLinks(&todoId) // *[]string,*bool

	examples, exampleExist := module.ExampleModule{self.DB}.GetExamples(&todoId) // *[]solutionExample,*bool

	solutionJson := module.GetSolution(description,links,linkExist,examples,exampleExist)

	view.GetSolution(solutionJson,w)

}