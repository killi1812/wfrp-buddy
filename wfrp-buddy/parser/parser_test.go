package parser

import (
	"os"
	"path/filepath"
	"testing"
)

func TestParseCharacter(t *testing.T) {
	// Adjust path to find the backup file from the test location
	path := filepath.Join("testdata", "Baba_Reka_Haraldsson_2026-3-16_backup.json")
	dir, err := os.ReadDir("testdata")
	if err != nil {
		t.Fatalf("Error while riding the testdata dir")
	}
	for _, item := range dir {
		item.Name()
		// TODO: read all the other characters
	}
	data, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("failed to read test file: %v", err)
	}

	char, err := ParseCharacter(data)
	if err != nil {
		t.Fatalf("failed to parse character: %v", err)
	}

	if char.Name != "Baba Reka Haraldsson" {
		t.Errorf("expected name 'Baba Reka Haraldsson', got '%s'", char.Name)
	}

	if char.Description.Eyes != "green" {
		t.Errorf("expected eyes 'green', got '%s'", char.Description.Eyes)
	}

	if char.Characteristics.Initative.Basic != 24 {
		t.Errorf("expected basic initiative 24, got %d", char.Characteristics.Initative.Basic)
	}

	if char.Characteristics.Initative.Advances != 10 {
		t.Errorf("expected advance initiative 10, got %d", char.Characteristics.Initative.Advances)
	}

	if char.Career.Career != "Hedge Witch" {
		t.Errorf("expected career 'Hedge Witch', got '%s'", char.Career.Career)
	}

	if len(char.Weapons) == 0 {
		t.Error("expected at least one weapon")
	} else {
		foundStaff := false
		for _, w := range char.Weapons {
			if w.Name == "Quarterstaff" {
				foundStaff = true
				break
			}
		}
		if !foundStaff {
			t.Error("expected Quarterstaff in weapons")
		}
	}

	if len(char.Skills) == 0 {
		t.Error("expected skills to be parsed")
	}

	// Check for a specific basic skill
	foundOutdoor := false
	for _, s := range char.Skills {
		if s.Name == "Outdoor Survival" {
			foundOutdoor = true
			if s.Advances != 6 {
				t.Errorf("expected 6 advances in Outdoor Survival, got %d", s.Advances)
			}
			if s.BaseChar != "Inteligence" {
				t.Errorf("expected Intelligence as base char for Outdoor Survival, got %s", s.BaseChar)
			}
			break
		}
	}
	if !foundOutdoor {
		t.Error("expected Outdoor Survival in skills")
	}

	foundPerception := false
	for _, s := range char.Skills {
		if s.Name == "Perception" {
			foundPerception = true
			if s.Advances != 10 {
				t.Errorf("expected 10 advances in Perception, got %d", s.Advances)
			}
			break
		}
	}
	if !foundPerception {
		t.Error("expected Perception in skills")
	}

	if len(char.Spells) == 0 {
		t.Error("expected spells to be parsed")
	}
}
