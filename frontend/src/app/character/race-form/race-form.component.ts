import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppForm} from "../../Form";
import {Character} from "../../Model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-race-form',
    templateUrl: './race-form.component.html',
    styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent extends AppForm implements OnInit {

    @Input()
    model: Character = {} as Character;

    @Output()
    modelChange = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
