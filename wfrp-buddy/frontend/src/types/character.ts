export interface Characteristic {
  name: string;
  initial: number;
  advances: number;
  current: number;
}

export interface Skill {
  name: string;
  characteristic: string;
  advances: number;
  isAdvanced: boolean;
}

export interface Talent {
  name: string;
  timesTaken: number;
  description: string;
}

export interface Weapon {
  name: string;
  group: string;
  damage: string;
  range: string;
  reload: string;
  qualities: string;
  encumbrance: number;
}

export interface Armour {
  name: string;
  location: string;
  ap: number;
  qualities: string;
  encumbrance: number;
}

export interface Trapping {
  name: string;
  encumbrance: number;
  description: string;
}

export interface Prayer {
  name: string;
  range: string;
  duration: string;
  effect: string;
}

export interface Character {
  name: string;
  career: string;
  path: string;
  status: string;
  age: number;
  fate: number;
  resilience: number;
  movement: number;
  experience: number;
  wounds: number;
  characteristics: Characteristic[];
  skills: Skill[];
  talents: Talent[];
  weapons: Weapon[];
  armour: Armour[];
  trappings: Trapping[];
  prayers: Prayer[];
}
