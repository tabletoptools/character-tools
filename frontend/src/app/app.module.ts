import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
    MatAutocompleteModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CharacterFormComponent } from './character-form/character-form.component';
import {CharacterListComponent} from "./character-list/character-list.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule,
      MatExpansionModule, MatCardModule, MatMenuModule,
      MatToolbarModule, MatCheckboxModule, MatSelectModule,
      MatAutocompleteModule, MatRadioModule, MatInputModule,
      MatIconModule, BrowserAnimationsModule, MatTableModule,
      MatFormFieldModule, FormsModule, MatButtonModule,
      MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
