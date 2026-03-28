package model

import (
	"github.com/google/uuid"
)

type Caracter struct {
	CaracterId uuid.UUID
	Name       string
	Species    Species
	Class      Class

	Career Career

	Status Status
	Skills Skills

	Description Description

	Talents         []LearnedTalent
	Characteristics Characteristics
	Movment         Movment
	Ambitions       Ambitions

	Party *Party

	Armour      []Armour
	Trappings   []Trapping
	Encumbrance Encumbrance
	Welth       Welth
	Wounds      Wounds
	Weapons     []Weapon
	Spells      []Spell
	Prayers     []Prayer

	Sin        int
	Corruption Corruption
	Psychology Psychology

	Points Points
}

type (
	Characteristics struct {
		WeaponSkill   Characteristic
		BalisticSkill Characteristic
		Strength      Characteristic
		Toughnes      Characteristic
		Initative     Characteristic
		Agility       Characteristic
		Dexterity     Characteristic
		Inteligence   Characteristic
		Willpower     Characteristic
		Fellowhip     Characteristic
	}

	Characteristic struct {
		Basic    int
		Advances int
	}

	Skills []Skill
	Skill  struct {
		Name     string
		BaseChar string
		Basic    int
		Advances int
	}

	Ambitions struct {
		ShortTerm string
		LongTerm  string
	}

	Party struct {
		Name      string
		Ambitions Ambitions
		Members   []Caracter
	}

	Movment struct {
		Movment int
		Walk    int
		Run     int
	}

	Career struct {
		Career     string
		CareerTier int // between 1 and 4
		CareerPath string
	}

	Status struct {
		Tier  StatusTier
		Level int
	}

	Description struct {
		Age         int
		Height      string
		Hair        string
		Eyes        string
		Description string
		Psychology  string
	}

	WornArmour []Armour
	Armour     struct {
		Name         string
		Location     Location
		Encumbrance  int
		ArmourPoints int
		Qualities    []Quality
		IsWorn       bool
	}

	Quality struct {
		Name        string
		Description string
		IsFlaw      bool
	}

	Trapping struct {
		Name        string
		Encumbrance int
		Qualities   []Quality
		IsWorn      bool

		IsStorage bool
		StoreEnc  int
		FilledEnc int
		Trappings []Trapping
	}

	Encumbrance struct {
		Weapons   int
		Armour    int
		Trappings int
		Max       int
		Total     int
		Penalty   string
	}

	// conversion 1GC = 20SS = 240D
	Welth struct {
		BrassPenny     int
		SilverShilling int
		GoldCrown      int
	}

	Wounds struct {
		Max     int
		Current int
	}

	Weapon struct {
		Name        string
		Group       WeaponGroup
		Encumbrance int
		Range_Reach int
		Damage      string
		Qualities   Quality
		IsWorn      bool
	}

	Psychology []string

	Corruption struct {
		Treshold  int
		Current   int
		Mutations []string
	}

	Points struct {
		Fate       FPoint
		Resilience RPoint
		Exp        ExpPoints
	}

	FPoint struct {
		FateMax        int
		FateCurrent    int
		FortuneMax     int
		FortuneCurrent int
	}
	RPoint struct {
		ResilienceMax      int
		ResilienceMCurrent int
		ResolveMax         int
		ResolveCurrent     int
		Motive             string
	}
	ExpPoints struct {
		Current int
		Spent   int
		Total   int
	}
)
