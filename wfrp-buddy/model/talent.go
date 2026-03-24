package model

import "github.com/google/uuid"

type Talent struct {
	Id          uuid.UUID
	Name        string
	Version     BookVersion
	MaxLvl      int
	Test        string `json:"test,omitempty"`
	Description string
}
