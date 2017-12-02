import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Character} from "../../Model";
import {AppForm} from "../../Form";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-character-control',
  templateUrl: './character-control.component.html',
  styleUrls: ['./character-control.component.css']
})
export class CharacterControlComponent extends AppForm implements OnInit {

    @Input()
    model: Character = {} as Character;

    @Output()
    modelChange: EventEmitter<Character> = new EventEmitter();

    @ViewChild('form')
    form: NgForm;

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
