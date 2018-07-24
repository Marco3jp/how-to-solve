package module

import (
	"database/sql"
)

type LinkModule struct {
	DB *sql.DB
}

func (self LinkModule) GetLinks(todoId *int) (*[]string,*bool) {
	var(
		links []string
		tempLink string
		exist bool
	)

	linksRow,err := self.DB.Query("select link from todo_links where todo_id = ?",todoId)

	if err == nil{
		for linksRow.Next(){
			if err = linksRow.Scan(&tempLink); err==nil{
				links = append(links, tempLink)
			}
		}
		exist = true
	}else{
		exist = false
	}

	return &links,&exist
}