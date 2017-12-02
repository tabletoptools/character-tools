import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Character, CharacterClass, Race} from "../../Model";
import {AppForm} from "../../Form";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-character-form',
    templateUrl: './character-form.component.html',
    styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent extends AppForm implements OnInit {

    races: Race[] = [
        {
            name: "Human",
            healthDie: '1d6',
            strInc: 1,
            dexInc: 1,
            constInc: 1,
            intInc: 1,
            wisInc: 1,
            charInc: 1,
            maxAge: 100,
            maxYouthAge: 20,
            recommendedAlignment: null,
            averageWeight: null,
            averageHeight: null,
            darkvision: false,
            resistances: [],
            proficiencies: [],
            subraces: [],
            languages: [
                'common',
                'undefined'
            ]
        },
        {
            name: "Dragonborn",
            healthDie: '1d8',
            strInc: 2,
            dexInc: 0,
            constInc: 0,
            intInc: 0,
            wisInc: 0,
            charInc: 1,
            maxAge: 80,
            maxYouthAge: 15,
            recommendedAlignment: 'good|evil',
            averageWeight: 250,
            averageHeight: 6,
            darkvision: false,
            resistances: [],
            proficiencies: [],
            subraces: [
            ],
            languages: [
                'common',
                'draconic'
            ]
        }
    ];

    classes: CharacterClass[] = [
        {
            name: "Wizard"
        },
        {
            name: "Fighter"
        }
    ];

    @Input()
    model: Character;

    @Output()
    modelChange: EventEmitter<Character> = new EventEmitter();

    @ViewChild('form') form: NgForm;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
