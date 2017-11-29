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
        return Math.floor((this.value - 10) / 2);
    }
}

export class Die {
    //Format: MultiplierXSize: 1d6
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    roll(): number {
        let values = this.value.split('x');
        let multiplier = +values[0];
        let size = +values[1];
        let total = 0;
        for(let counter = 0; counter < multiplier; counter++) {
            total += this.random(size);
        }
        return total;
    }

    private random(max) {
        return Math.floor(Math.random() * ((max-1)+1)+1)
    }

}
