package service

import (
	"changeme/model"
	"github.com/google/uuid"
)

var characters = []model.CaracterDetails{
	{
		CaracterId: uuid.MustParse("11111111-1111-1111-1111-111111111111"),
		Name:       "Gottfried von Berlichingen",
		Species:    "Dwarf",
		Class:      "Warrior",
		Career:     model.Career{Career: "Slayer", CareerTier: 2, CareerPath: "Troll Slayer"},
		Status:     model.Status{Tier: model.Brass, Level: 3},
		Description: model.Description{
			Age:         32,
			Height:      "4'8\"",
			Hair:        "Orange",
			Eyes:        "Blue",
			Description: "A standard slayer",
			Psychology:  "Grim",
		},
		Characteristics: model.Characteristics{
			WeaponSkill:   model.Characteristic{Basic: 30, Advances: 5},
			BalisticSkill: model.Characteristic{Basic: 25, Advances: 0},
			Strength:      model.Characteristic{Basic: 35, Advances: 10},
			Toughnes:      model.Characteristic{Basic: 40, Advances: 15},
			Initative:     model.Characteristic{Basic: 30, Advances: 0},
			Agility:       model.Characteristic{Basic: 30, Advances: 0},
			Dexterity:     model.Characteristic{Basic: 25, Advances: 0},
			Inteligence:   model.Characteristic{Basic: 20, Advances: 0},
			Willpower:     model.Characteristic{Basic: 35, Advances: 5},
			Fellowhip:     model.Characteristic{Basic: 20, Advances: 0},
		},
		Movment: model.Movment{Movment: 3, Walk: 6, Run: 12},
		Ambitions: model.Ambitions{
			ShortTerm: "Kill a Troll",
			LongTerm:  "Die a Slayer's Death",
		},
		Points: model.Points{
			Fate: model.FPoint{FateMax: 2, FateCurrent: 2, FortuneMax: 2, FortuneCurrent: 2},
			Resilience: model.RPoint{
				ResilienceMax:      2,
				ResilienceMCurrent: 2,
				ResolveMax:         2,
				ResolveCurrent:     2,
				Motive:             "Redemption",
			},
			Exp: model.ExpPoints{Current: 150, Spent: 100, Total: 250},
		},
		Wounds: model.Wounds{Max: 15, Current: 15},
		Welth:  model.Welth{BrassPenny: 10, SilverShilling: 5, GoldCrown: 1},
		Corruption: model.Corruption{
			Treshold:  10,
			Current:   0,
			Mutations: []string{},
		},
		Psychology: []string{"Fear of Elves"},
		Skills: model.Skills{
			{Name: "Athletics", BaseChar: "Agility", Basic: 30, Advances: 5},
			{Name: "Dodge", BaseChar: "Agility", Basic: 30, Advances: 10},
		},
	},
	{
		CaracterId: uuid.MustParse("22222222-2222-2222-2222-222222222222"),
		Name:       "Elara Swiftfoot",
		Species:    "Elf",
		Class:      "Ranger",
		Career:     model.Career{Career: "Hunter", CareerTier: 1, CareerPath: "Scout"},
		Status:     model.Status{Tier: model.Brass, Level: 5},
		Description: model.Description{
			Age:         120,
			Height:      "6'1\"",
			Hair:        "Silver",
			Eyes:        "Green",
			Description: "An agile woodsman",
			Psychology:  "Calm",
		},
		Characteristics: model.Characteristics{
			WeaponSkill:   model.Characteristic{Basic: 30, Advances: 0},
			BalisticSkill: model.Characteristic{Basic: 40, Advances: 10},
			Strength:      model.Characteristic{Basic: 30, Advances: 0},
			Toughnes:      model.Characteristic{Basic: 30, Advances: 0},
			Initative:     model.Characteristic{Basic: 40, Advances: 5},
			Agility:       model.Characteristic{Basic: 45, Advances: 10},
			Dexterity:     model.Characteristic{Basic: 35, Advances: 0},
			Inteligence:   model.Characteristic{Basic: 35, Advances: 5},
			Willpower:     model.Characteristic{Basic: 30, Advances: 0},
			Fellowhip:     model.Characteristic{Basic: 30, Advances: 0},
		},
		Movment: model.Movment{Movment: 5, Walk: 10, Run: 20},
		Ambitions: model.Ambitions{
			ShortTerm: "Track the Beast",
			LongTerm:  "Protect the Forest",
		},
		Points: model.Points{
			Fate: model.FPoint{FateMax: 1, FateCurrent: 1, FortuneMax: 1, FortuneCurrent: 1},
			Resilience: model.RPoint{
				ResilienceMax:      1,
				ResilienceMCurrent: 1,
				ResolveMax:         1,
				ResolveCurrent:     1,
				Motive:             "Vengeance",
			},
			Exp: model.ExpPoints{Current: 50, Spent: 200, Total: 250},
		},
		Wounds: model.Wounds{Max: 12, Current: 12},
		Welth:  model.Welth{BrassPenny: 20, SilverShilling: 10, GoldCrown: 0},
		Corruption: model.Corruption{
			Treshold:  6,
			Current:   0,
			Mutations: []string{},
		},
		Psychology: []string{"Fear of Spiders"},
		Skills:     model.Skills{},
	},
}
