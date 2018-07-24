package module

import (
	"../model"
	"encoding/json"
)

func GetSolution(description *string,links *[]string,linkExist *bool,examples *[]model.SolutionExample,exampleExist *bool) *[]byte {
	var(
		solution model.Solution
	)

	solution.Description = description

	if *linkExist {
		solution.Links = links
	}

	if *exampleExist{
		solution.Examples = examples
	}

	solutionJson,err := json.Marshal(solution)

	if err != nil {
		panic(err)
	}


	return &solutionJson
}