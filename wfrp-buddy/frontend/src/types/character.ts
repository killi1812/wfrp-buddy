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
  species: string;
  class: string;
  career: string;
  path: string;
  status: string;
  tier: string;
  age: number;
  height: string;
  hair: string;
  eyes: string;
  motivation: string;
  shortTermAmbition: string;
  longTermAmbition: string;
  partyName: string;
  partyMembers: string;
  fate: number;
  fortune: number;
  resilience: number;
  resolve: number;
  movement: number;
  expSpent: number;
  expTotal: number;
  wounds: number;
  characteristics: Characteristic[];
  skills: Skill[];
  talents: Talent[];
  weapons: Weapon[];
  armour: Armour[];
  trappings: Trapping[];
  prayers: Prayer[];
}
