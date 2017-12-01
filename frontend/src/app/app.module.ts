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
import { CharacterFormComponent } from './character/character-form/character-form.component';
import {CharacterListComponent} from "./character/character-list/character-list.component";
import {FormsModule} from "@angular/forms";
import { NewcharacterComponent } from './character/newcharacter/newcharacter.component';
import {RouterModule, Routes} from "@angular/router";
import { CharacterComponent } from './character/character.component';

const ROUTE_CONFIG: Routes = [
    {
        path: "characters",
        component: CharacterComponent,
        children: [
            {
                path: 'list',
                component: CharacterListComponent
            },
            {
                path: "new",
                component: NewcharacterComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'characters/list',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'characters/list'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterFormComponent,
    NewcharacterComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTE_CONFIG),
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
