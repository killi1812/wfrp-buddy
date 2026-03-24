package service

import "changeme/model"

type CharacterSrv struct{}

func (srv *CharacterSrv) Greet(id string) (*model.Caracter, error) {
	return &model.Caracter{}, nil
}
