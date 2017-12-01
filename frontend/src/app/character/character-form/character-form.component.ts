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
            healthDie: '1d6'
        },
        {
            name: "Dragonborn",
            healthDie: '1d8'
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
