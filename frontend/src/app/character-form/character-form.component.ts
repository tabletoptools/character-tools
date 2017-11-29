import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Character} from "../Model";
import {AppForm} from "../Form";
import {NgForm} from "@angular/forms";

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

    @ViewChild('form') form: NgForm;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
