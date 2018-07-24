package controller

import (
	"net/http"
	"../module"
	"../view"
)

type ConfigController struct {
	*BaseController
}


func (self ConfigController) GetConfig(w http.ResponseWriter, r *http.Request)  {
	configJson := module.ConfigModule{self.DB}.GetConfig()

	view.GetConfig(configJson,w)
}