package service

import (
	"changeme/model"

	"github.com/google/uuid"
)

type CharacterSrv struct{}

func (srv *CharacterSrv) GetCharacter(id string) (*model.CaracterDetails, error) {
	parsedId, err := uuid.Parse(id)
	if err != nil {
		return nil, err
	}
	for _, c := range characters {
		if c.CaracterId == parsedId {
			return &c, nil
		}
	}
	return nil, nil
}

func (srv *CharacterSrv) ImportCharacter(jsonData string) (*model.CaracterDetails, error) {
	// For now, just log and return success.
	println("Received character JSON:", jsonData)
	return &model.CaracterDetails{}, nil
}

func (srv *CharacterSrv) GetCharacterList() ([]model.CaracterPreview, error) {
	previews := make([]model.CaracterPreview, len(characters))
	for i, c := range characters {
		previews[i] = model.CaracterPreview{
			CaracterId:  c.CaracterId,
			Name:        c.Name,
			Species:     c.Species,
			Class:       c.Class,
			Career:      c.Career,
			Status:      c.Status,
			Description: c.Description,
		}
	}
	return previews, nil
}
