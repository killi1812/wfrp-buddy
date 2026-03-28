// clean interfaces for props
export interface CharacteristicValue {
  Basic: number;
  Advances: number;
}

export interface Skill {
  Name: string;
  Characteristic: string;
  Basic: number;
  Advances: number;
}

export interface Talent {
  Name: string;
  Description: string;
  MaxLvl: number;
  TimesTaken?: number;
}

export interface Weapon {
  Name: string;
  Group: string;
  Damage: string;
  Range_Reach: string | number;
  Qualities: { Name: string };
  Encumbrance: number;
}

export interface Armour {
  Name: string;
  Location: string;
  ArmourPoints: number;
  Qualities: any[];
  Encumbrance: number;
}

export interface Spell {
  Id: string;
  Name: string;
  CastingNumber: number;
  Range: string;
  Target: string;
  Duration: string;
  Effect: string;
}

export interface Prayer {
  Id: string;
  Name: string;
  Range: string;
  Target: string;
  Duration: string;
  Effect: string;
}

export interface Trapping {
  Name: string;
  Encumbrance: number;
  Qualities: any[];
}
