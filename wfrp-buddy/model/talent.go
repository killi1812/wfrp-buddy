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

type LearnedTalent struct {
	// Talent references the original talent this one is just the copy
	Talent      Talent
	Name        string
	Lvl         int
	Description string
}
