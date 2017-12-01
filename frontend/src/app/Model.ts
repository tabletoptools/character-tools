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
    age: string;
    race: Race;
    class: CharacterClass;
    spells: Spell[];
    constitution: Stat;
    wisdom: Stat;
    intelligence: Stat;
    strength: Stat;
    dexterity: Stat;
    charisma: Stat;
    image: string;
    background: Background;
    alignment: string;
    languages: string[];
    inventory: Inventory;

}

export interface Race {
    name: string;
    healthDie: string;
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

export class Stat {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get modifier(): number {
        return Math.floor((this.value - 10) / 2);
    }
}

export function roll(dice: string): number {
    let values = dice.split('x');
    let multiplier = +values[0];
    let size = +values[1];
    let total = 0;
    for(let counter = 0; counter < multiplier; counter++) {
        total += this.random(size);
    }
    return total;
}
