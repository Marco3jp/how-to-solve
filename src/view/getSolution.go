package view

import (
	"net/http"
	"fmt"
)

func GetSolution(solutionJson *[]byte,w http.ResponseWriter)  {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(http.StatusOK)

	fmt.Fprint(w,string(*solutionJson))
}
