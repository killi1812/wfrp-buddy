package model

import "github.com/google/uuid"

// TODO: work in blessings

type Prayer struct {
	Id       uuid.UUID
	Name     string
	Range    string
	Target   string
	Duration string
	Effect   string
}
