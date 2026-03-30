package service

import "changeme/model"

type CharacterSrv struct{}

func (srv *CharacterSrv) Greet(id string) (*model.CaracterDetails, error) {
	return &model.CaracterDetails{}, nil
}

func (srv *CharacterSrv) GetCharacter(id string) (*model.CaracterDetails, error) {
	return &model.CaracterDetails{}, nil
}

func (srv *CharacterSrv) GetCharacterList() ([]model.CaracterPreview, error) {
	return []model.CaracterPreview{}, nil
}
