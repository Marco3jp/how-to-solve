package model

type Config struct {
	Result bool `json:"result"`
	Color struct {
		Main      string `json:"main"`
		MainDark  string `json:"main_dark"`
		MainLight string `json:"main_light"`
		Sub       string `json:"sub"`
		SubDark   string `json:"sub_dark"`
		SubLight  string `json:"sub_light"`
	} `json:"color"`
	Label struct {
		PointA string `json:"pointA"`
		PointB string `json:"pointB"`
		PointC string `json:"pointC"`
	} `json:"label"`
}