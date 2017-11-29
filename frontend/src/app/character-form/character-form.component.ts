import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../Model";
import {AppForm} from "../Form";

@Component({
    selector: 'app-character-form',
    templateUrl: './character-form.component.html',
    styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent extends AppForm implements OnInit {

    @Input()
    model: Character;

    @Output()
    modelChange: EventEmitter<Character> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

}
