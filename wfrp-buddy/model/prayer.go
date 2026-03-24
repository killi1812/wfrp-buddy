package model

import "github.com/google/uuid"

type Prayer struct {
	Id       uuid.UUID
	Name     string
	Range    string
	Target   string
	Duration string
	Effect   string
}
