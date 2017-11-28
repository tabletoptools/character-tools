export class Character {
    name: string;
    health: number;
    armorClass: number;
    race: Race;
    class: CharacterClass;
    spells: Spell[];
    preparedSpells: Spell[];
    constitution: Stat;
    wisdom: Stat;
    intelligence: Stat;
    strength: Stat;
}

export class Race {
    healthDie: Die;
}

export class CharacterClass {

}

export class Spell {

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
        return Math.floor((value - 10) / 2);
    }
}

export class Die {
    //Format: MultiplierXSize: 1d6
    multiplier: number;
    size: number;

    constructor(multiplier: number, size: number) {
        this.multiplier = multiplier;
        this.size = size;
    }

    constructor(die: string) {
        let values = die.split('x');
        this.multiplier = values[0];
        this.size = values[1];
    }

    roll() {
        let total = 0;
        for(let counter = 0; counter < this.multiplier; counter++) {
            total += this.random(this.size);
        }
    }

    private random(max) {
        return Math.floor(Math.random() * ((max-1)+1)+1)
    }

}
