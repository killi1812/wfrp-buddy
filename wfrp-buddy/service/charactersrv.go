package service

import (
	"changeme/model"
	"changeme/parser"
	"github.com/google/uuid"
	"os"
)

type CharacterSrv struct{}

func (srv *CharacterSrv) Greet(id string) (*model.CaracterDetails, error) {
	return srv.GetCharacter(id)
}

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
	char, err := parser.ParseCharacter([]byte(jsonData))
	if err != nil {
		return nil, err
	}
	// For now, we append it to our temporary data.
	characters = append(characters, *char)
	return char, nil
}

func (srv *CharacterSrv) ReadFile(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	return string(content), nil
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
