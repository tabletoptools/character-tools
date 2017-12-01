import {Component, OnInit} from '@angular/core';
import {Character} from "../../Model";

@Component({
    selector: 'app-newcharacter',
    templateUrl: './newcharacter.component.html',
    styleUrls: ['./newcharacter.component.css']
})
export class NewcharacterComponent implements OnInit {

    character = {} as Character;

    constructor() {
    }

    ngOnInit() {

    }

}
