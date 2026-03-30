package parser

import (
	"changeme/model"
	"encoding/json"
	"github.com/google/uuid"
	"regexp"
	"strconv"
	"strings"
)

var (
	reWeaponsName     = regexp.MustCompile(`^weapons-name-(\d+)$`)
	reTrappingsName   = regexp.MustCompile(`^trappings-name-(\d+)$`)
	reCustomSkillName = regexp.MustCompile(`^custom-skill-name-(\d+)$`)
	reTalentsName     = regexp.MustCompile(`^talents-name-(\d+)$`)
	reSpellsName      = regexp.MustCompile(`^spells-name-(\d+)$`)
	rePrayersName     = regexp.MustCompile(`^prayers-name-(\d+)$`)
)

type basicSkillDef struct {
	Name     string
	BaseChar string
	Slug     string
}

var basicSkillsList = []basicSkillDef{
	{"Art", "Dexterity", "art"},
	{"Athletics", "Agility", "athletics"},
	{"Bribery", "Fellowhip", "bribery"},
	{"Charm", "Fellowhip", "charm"},
	{"Charm Animal", "Willpower", "charm-animal"},
	{"Climb", "Strength", "climb"},
	{"Consume Alcohol", "Toughnes", "consume-alcohol"},
	{"Cool", "Willpower", "cool"},
	{"Dodge", "Agility", "dodge"},
	{"Drive", "Agility", "drive"},
	{"Endurance", "Toughnes", "endurance"},
	{"Entertain", "Fellowhip", "entertain"},
	{"Gamble", "Inteligence", "gamble"},
	{"Gossip", "Fellowhip", "gossip"},
	{"Haggle", "Fellowhip", "haggle"},
	{"Intimidate", "Strength", "intimidate"},
	{"Intuition", "Initative", "intuition"},
	{"Leadership", "Fellowhip", "leadership"},
	{"Melee (Basic)", "WeaponSkill", "melee-basic"},
	{"Navigation", "Initative", "navigation"},
	{"Outdoor Survival", "Inteligence", "outdoor-survival"},
	{"Perception", "Initative", "perception"},
	{"Ride", "Agility", "ride"},
	{"Row", "Strength", "row"},
	{"Stealth", "Agility", "stealth"},
}

// ParseCharacter parses the flat character JSON backup format.
func ParseCharacter(data []byte) (*model.CaracterDetails, error) {
	var raw map[string]string
	if err := json.Unmarshal(data, &raw); err != nil {
		return nil, err
	}

	char := &model.CaracterDetails{
		CaracterId: uuid.New(),
		Name:       raw["name"],
		Species:    raw["species"],
		Class:      raw["class"],
		Description: model.Description{
			Eyes:        raw["eyes"],
			Hair:        raw["hair"],
			Age:         toInt(raw["age"]),
			Height:      raw["height"],
			Description: raw["description"],
			Psychology:  raw["psychology"],
		},
		Career: model.Career{
			Class:      raw["class"],
			Career:     raw["career"],
			CareerPath: raw["career-path"],
			CareerTier: toInt(raw["career-tier"]),
		},
		Status: parseStatus(raw["status"]),
		Movment: model.Movment{
			Movment: toInt(raw["movement"]),
			Walk:    toInt(raw["movement"]) * 2,
			Run:     toInt(raw["movement"]) * 4,
		},
		Points: model.Points{
			Fate: model.FPoint{
				FateMax:        toInt(raw["fate-total"]),
				FortuneMax:     toInt(raw["fortune-total"]),
				FateCurrent:    toInt(raw["fate-current"]),
				FortuneCurrent: toInt(raw["fortune-current"]),
			},
			Resilience: model.RPoint{
				ResilienceMax:      toInt(raw["resilience-total"]),
				ResolveMax:         toInt(raw["resolve-total"]),
				ResilienceMCurrent: toInt(raw["resilience-current"]),
				ResolveCurrent:     toInt(raw["resolve-current"]),
				Motive:             raw["motivation"],
			},
			Exp: model.ExpPoints{
				Current: toInt(raw["current-xp"]),
				Spent:   toInt(raw["spent-xp"]),
				Total:   toInt(raw["current-xp"]) + toInt(raw["spent-xp"]),
			},
		},
		Ambitions: model.Ambitions{
			ShortTerm: raw["ambitions-short"],
			LongTerm:  raw["ambitions-long"],
		},
		Wounds: model.Wounds{
			Max:     toInt(raw["max-wounds"]),
			Current: toInt(raw["current-wounds"]),
		},
		Welth: model.Welth{
			BrassPenny:     toInt(raw["copper"]),
			SilverShilling: toInt(raw["silver"]),
			GoldCrown:      toInt(raw["gold"]),
		},
		Corruption: model.Corruption{
			Treshold: toInt(raw["treshold"]),
			Current:  toInt(raw["corruption-current"]),
		},
		Psychology: splitPsychology(raw["psychology"]),
	}

	char.Characteristics = parseCharacteristics(raw)
	char.Weapons = parseWeapons(raw)
	char.Trappings = parseTrappings(raw)
	char.Skills = parseSkills(raw)
	char.Talents = parseTalents(raw)
	char.Spells = parseSpells(raw)
	char.Prayers = parsePrayers(raw)

	if partyName := raw["party-name"]; partyName != "" {
		char.Party = &model.Party{
			Name: partyName,
			Ambitions: model.Ambitions{
				ShortTerm: raw["party-short"],
				LongTerm:  raw["party-long"],
			},
		}
	}

	return char, nil
}

func toInt(s string) int {
	if s == "" {
		return 0
	}
	v, _ := strconv.Atoi(s)
	return v
}

func parseStatus(s string) model.Status {
	// Format is like "silver 1"
	parts := strings.Fields(s)
	if len(parts) < 2 {
		return model.Status{}
	}
	var tier model.StatusTier
	switch strings.ToLower(parts[0]) {
	case "brass":
		tier = model.Brass
	case "silver":
		tier = model.Silver
	case "gold":
		tier = model.Gold
	}
	return model.Status{
		Tier:  tier,
		Level: toInt(parts[1]),
	}
}

func splitPsychology(s string) []string {
	if s == "" {
		return nil
	}
	return strings.Split(s, ",")
}

func parseCharacteristics(raw map[string]string) model.Characteristics {
	get := func(prefix string) model.Characteristic {
		return model.Characteristic{
			Basic:    toInt(raw[prefix+"-i"]),
			Advances: toInt(raw[prefix+"-a"]),
		}
	}

	return model.Characteristics{
		WeaponSkill:   get("ws"),
		BalisticSkill: get("bs"),
		Strength:      get("s"),
		Toughnes:      get("t"),
		Initative:     get("i"),
		Agility:       get("ag"),
		Dexterity:     get("dex"),
		Inteligence:   get("int"),
		Willpower:     get("wp"),
		Fellowhip:     get("fel"),
	}
}

func parseWeapons(raw map[string]string) []model.Weapon {
	var weapons []model.Weapon
	for k, v := range raw {
		match := reWeaponsName.FindStringSubmatch(k)
		if match != nil {
			idx := match[1]
			if v == "" {
				continue
			}
			weapons = append(weapons, model.Weapon{
				Name:        v,
				Group:       raw["weapons-group-"+idx],
				Encumbrance: toInt(raw["weapons-encumbrance-"+idx]),
				Damage:      raw["weapons-damage-"+idx],
				Range_Reach: toInt(raw["weapons-range-"+idx]),
				IsWorn:      raw["weapons-worn-"+idx] == "true",
			})
		}
	}
	return weapons
}

func parseTrappings(raw map[string]string) []model.Trapping {
	var trappings []model.Trapping
	for k, v := range raw {
		match := reTrappingsName.FindStringSubmatch(k)
		if match != nil {
			idx := match[1]
			if v == "" {
				continue
			}
			trappings = append(trappings, model.Trapping{
				Name:        v,
				Encumbrance: toInt(raw["trappings-encumbrance-"+idx]),
				IsWorn:      raw["trappings-worn-"+idx] == "true",
			})
		}
	}
	return trappings
}

func parseSkills(raw map[string]string) model.Skills {
	var skills model.Skills

	// 1. Parse Basic Skills (always present)
	for _, def := range basicSkillsList {
		skills = append(skills, model.Skill{
			Name:     def.Name,
			BaseChar: def.BaseChar,
			Advances: toInt(raw[def.Slug+"-aug"]),
		})
	}

	// 2. Parse Custom/Advanced Skills
	for k, v := range raw {
		match := reCustomSkillName.FindStringSubmatch(k)
		if match != nil {
			idx := match[1]
			if v == "" {
				continue
			}
			skills = append(skills, model.Skill{
				Name:     v,
				BaseChar: mapCharName(raw["custom-skill-charac-"+idx]),
				Advances: toInt(raw["custom-skill-aug-"+idx]),
			})
		}
	}
	return skills
}

func mapCharName(short string) string {
	switch strings.ToLower(short) {
	case "ws":
		return "WeaponSkill"
	case "bs":
		return "BalisticSkill"
	case "s":
		return "Strength"
	case "t":
		return "Toughnes"
	case "i":
		return "Initative"
	case "ag":
		return "Agility"
	case "dex":
		return "Dexterity"
	case "int":
		return "Inteligence"
	case "wp":
		return "Willpower"
	case "fel":
		return "Fellowhip"
	}
	return short
}

func parseTalents(raw map[string]string) []model.LearnedTalent {
	var talents []model.LearnedTalent
	for k, v := range raw {
		match := reTalentsName.FindStringSubmatch(k)
		if match != nil {
			idx := match[1]
			if v == "" {
				continue
			}
			talents = append(talents, model.LearnedTalent{
				Name:        v,
				Lvl:         toInt(raw["talents-counter-"+idx]),
				Description: raw["talents-desc-"+idx],
			})
		}
	}
	return talents
}

func parseSpells(raw map[string]string) []model.Spell {
	var spells []model.Spell
	for k, v := range raw {
		match := reSpellsName.FindStringSubmatch(k)
		if match != nil {
			idx := match[1]
			if v == "" {
				continue
			}
			spells = append(spells, model.Spell{
				Name:          v,
				CastingNumber: toInt(raw["spells-cn-"+idx]),
				Range:         raw["spells-range-"+idx],
				Target:        raw["spells-target-"+idx],
				Duration:      raw["spells-duration-"+idx],
				Effect:        raw["spells-effects-"+idx],
			})
		}
	}
	return spells
}

func parsePrayers(raw map[string]string) []model.Prayer {
	var prayers []model.Prayer
	for k, v := range raw {
		match := rePrayersName.FindStringSubmatch(k)
		if match != nil {
			idx := match[1]
			if v == "" {
				continue
			}
			prayers = append(prayers, model.Prayer{
				Name:     v,
				Range:    raw["prayers-range-"+idx],
				Target:   raw["prayers-target-"+idx],
				Duration: raw["prayers-duration-"+idx],
				Effect:   raw["prayers-effects-"+idx],
			})
		}
	}
	return prayers
}
