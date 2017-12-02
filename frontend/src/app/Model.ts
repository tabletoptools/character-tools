export interface Character {
    name: string;
    level: number;
    exp: number;
    health: number;
    ac: number;
    maxhp: number;
    currhp: number;
    gender: string;
    skin: string;
    height: string;
    weight: string;
    playername: string;
    age: string;
    race: Race;
    class: CharacterClass;
    spells: Spell[];
    constitution: number;
    wisdom: number;
    intelligence: number;
    strength: number;
    dexterity: number;
    charisma: number;
    image: string;
    background: Background;
    alignment: string;
    languages: string[];
    inventory: Inventory;

}

export interface Race {
    name: string;
    healthDie: string;
    strInc: number;
    dexInc: number;
    constInc: number;
    intInc: number;
    wisInc: number;
    charInc: number;
    maxAge: number;
    maxYouthAge: number;
    recommendedAlignment: string;
    averageWeight: number;
    averageHeight: number;
    darkvision: boolean;
    resistances: Resistance[];
    proficiencies: any; //Prof Enum
    subraces: Race[];
    languages: string[];

}

export interface CharacterClass {
    name: string;
}

export interface Spell {

}

export interface Background {

}

export interface Inventory {

}

export enum Resistance {
    POISON = 1
}

export enum WeaponProf {

}

export enum ToolProf {

}

export enum SkillProf {

}

export function modifier(stat: number): number {
    return Math.floor((stat - 10) / 2);
}

export function roll(dice: string): number {
    let values = dice.split('x');
    let multiplier = +values[0];
    let size = +values[1];
    let total = 0;
    for (let counter = 0; counter < multiplier; counter++) {
        total += this.random(size);
    }
    return total;
}
