
// TODO: add other rulebooks
type version = "core" | "windsOfMagic" | "upInArms";

type skill = "weapon skill" | "balistic skill" | "strength" | "toughnes" | "initative" | "agility" | "dexterity" | "inteligence" | "willpower" | "fellowhip"
type skillMaxLevel = skill | 1 | 2

interface Talent {
  name: string,
  version: version, // default core
  maxLvl: skillMaxLevel // always bonus
  test?: string,
  description: string,
}

const talents: Talent[] = [
  {
    name: "Accurate Shot",
    version: "core",
    maxLvl: "balistic skill",
    description: "You are an exceptional shot and know where to shoot an enemy in order to inflict maximum damage. You deal your Accurate Shot level in extra Damage with all ranged weapons"
  },
  {
    name: "Acute Sense (Sense)",
    version: "core",
    maxLvl: "initative",
    test: "Perception (Sense)",
    description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else’s eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels."
  },
]
