package main

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"

	"fmt"
	"net/http"

	"./router"
	"./model"
	"encoding/json"
	"io/ioutil"
)

func main()  {
	fmt.Printf("Start API Server!\n")

	configFile ,err := ioutil.ReadFile("./config.json")
	if err!=nil{
		fmt.Printf("There is not config file! :o\n")
		panic(err)
	}

	config := new(model.ApplicationConfig)

	if err = json.Unmarshal(configFile,config);err != nil{
		fmt.Printf("this is false config file :(\n")
		panic(err)
	}

	db , dbErr := sql.Open("sqlite3", config.DataBaseDirectory)
	if dbErr != nil {
		fmt.Printf("wrong directory or cannot read db file :<\n")
		panic(dbErr)
	}
	defer db.Close()

	r := router.Init(db)
	http.ListenAndServe(":9250", r)
}
