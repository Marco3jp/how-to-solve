package module

import (
	"database/sql"

	"../model"
)

type ExampleModule struct {
	DB *sql.DB
}

func (self ExampleModule) GetExamples(todoId *int) (*[]model.SolutionExample,*bool) {
	var(
		examples []model.SolutionExample
		tempExample  model.SolutionExample
		exist bool
	)

	linksRow,err := self.DB.Query("select example_type,example_content from todo_example where todo_id = ?",todoId)

	if err == nil{
		for linksRow.Next(){
			if err = linksRow.Scan(&tempExample.Type,&tempExample.ExampleContent); err==nil{
				examples = append(examples, tempExample)
			}
		}
		exist = true
	}else{
		exist = false
	}

	return &examples,&exist
}