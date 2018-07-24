package module

import (
	"database/sql"
	"encoding/json"

	"../model"
	"../const"
)

type ConfigModule struct {
	DB *sql.DB
}

func (self ConfigModule) GetConfig() *[]byte {
	var(
		config model.Config
		colorId int
		labelId int
	)

	row := self.DB.QueryRow("select color_id, label_id from config where uuid = ?", _const.UUID)
	err := row.Scan(
		&colorId,
		&labelId,
		)

	if err != nil{
		panic(err)
	}

	row = self.DB.QueryRow("select main , main_dark , main_light , sub,sub_dark,sub_light from config_color where color_id = ?", colorId)
	err = row.Scan(
		&config.Color.Main,
		&config.Color.MainDark,
		&config.Color.MainLight,
		&config.Color.Sub,
		&config.Color.SubDark,
		&config.Color.SubLight,
	)

	if err != nil{
		panic(err)
	}

	row = self.DB.QueryRow("select label_A , label_B, label_C  from config_label where label_Id = ?", labelId)
	err = row.Scan(
		&config.Label.PointA,
		&config.Label.PointB,
		&config.Label.PointC,
	)

	if err != nil{
		panic(err)
	}


	if err != nil{
		if err == sql.ErrNoRows{
			config.Result = false
		}
	} else {
		config.Result = true
	}

	configJson,err := json.Marshal(config)

	if err != nil {
		panic(err)
	}

	return &configJson
}