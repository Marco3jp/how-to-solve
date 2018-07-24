package module

import (
	"database/sql"
	"fmt"
)

type DescriptionModule struct {
	DB *sql.DB
}

func (self DescriptionModule) GetDescription(todoId *int) *string {
	var(
		description string
	)

	err := self.DB.QueryRow("select description from todo_solution where todo_id = ?",todoId).Scan(&description)

	if err!=nil{
		fmt.Printf("noData!")
	}

	return &description
}