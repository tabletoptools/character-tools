import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatTableModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CharacterFormComponent } from './character-form/character-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule, MatExpansionModule, MatCardModule, MatInputModule, MatIconModule, BrowserAnimationsModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
