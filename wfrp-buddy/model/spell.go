package model

import "github.com/google/uuid"

type Spell struct {
	Id            uuid.UUID
	Name          string
	CastingNumber int
	Range         string
	Target        string
	Duration      string
	Effect        string
}
