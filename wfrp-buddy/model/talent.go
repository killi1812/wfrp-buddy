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

// LearnedTalent this is a copy of the original talent
type LearnedTalent struct {
	Talent      *Talent // references the original talent
	Name        string
	Lvl         int
	Description string
}
