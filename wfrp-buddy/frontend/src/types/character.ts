// Matching Go/Wails generated types from model/caracter.go

export interface CharacteristicValue {
  Basic: number;
  Advances: number;
}

export interface Characteristics {
  WeaponSkill: CharacteristicValue;
  BalisticSkill: CharacteristicValue;
  Strength: CharacteristicValue;
  Toughnes: CharacteristicValue;
  Initative: CharacteristicValue;
  Agility: CharacteristicValue;
  Dexterity: CharacteristicValue;
  Inteligence: CharacteristicValue;
  Willpower: CharacteristicValue;
  Fellowhip: CharacteristicValue;
}

export interface Skill {
  Characteristic: string; // This might be a mistake in Go struct if it's supposed to be an enum/ref
  Basic: number;
  Advances: number;
  Name?: string; // Adding for UI convenience
}

export interface Talent {
  Name: string;
  Description: string;
  TimesTaken?: number; // Custom addition for UI
}

export interface Quality {
  Name: string;
  Description: string;
  IsFlaw: boolean;
}

export interface Weapon {
  Name: string;
  Group: string;
  Encumbrance: number;
  Range_Reach: number;
  Damage: string;
  Qualities: Quality;
  IsWorn: boolean;
}

export interface Armour {
  Name: string;
  Location: string;
  Encumbrance: number;
  ArmourPoints: number;
  Qualities: Quality[];
  IsWorn: boolean;
}

export interface Trapping {
  Name: string;
  Encumbrance: number;
  Qualities: Quality[];
  IsWorn: boolean;
  IsStorage: boolean;
  StoreEnc: number;
  FilledEnc: number;
  Trappings: Trapping[];
}

export interface Prayer {
  Id: string;
  Name: string;
  Range: string;
  Target: string;
  Duration: string;
  Effect: string;
}

export interface Description {
  Age: number;
  Height: string;
  Hair: string;
  Eyes: string;
  Description: string;
  Psychology: string;
}

export interface Status {
  Tier: string;
  Level: number;
}

export interface Career {
  Career: string;
  CareerTier: number;
  CareerPath: string;
}

export interface Movment {
  Movment: number;
  Walk: number;
  Run: number;
}

export interface Ambitions {
  shortTerm: string;
  LongTerm: string;
}

export interface FPoint {
  FateMax: number;
  FateCurrent: number;
  FortuneMax: number;
  FortuneCurrent: number;
}

export interface RPoint {
  ResilienceMax: number;
  ResilienceMCurrent: number;
  ResolveMax: number;
  ResolveCurrent: number;
  Motive: string;
}

export interface ExpPoints {
  Current: number;
  Spent: number;
  Total: number;
}

export interface Points {
  Fate: FPoint;
  Resilience: RPoint;
  Exp: ExpPoints;
}

export interface Wounds {
  Max: number;
  Current: number;
}

export interface Caracter {
  CaracterId: string;
  Name: string;
  Species: string;
  Class: string;
  Career: Career;
  Status: Status;
  Description: Description;
  Talents: Talent[];
  Characteristics: Characteristics; // Fixed typo from 'Characteristic' to match intent
  Movment: Movment;
  Ambitions: Ambitions;
  Armour: Armour; // Go struct says singular Armour
  Trappings: Trapping[];
  Wounds: Wounds;
  Weapons: Weapon[];
  Prayers: Prayer[];
  Points: Points;
  Skills?: Skill[]; // Skills seems missing from main struct in Go, but defined in types
}
