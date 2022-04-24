import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionaryInputComponent } from './components/questionary-input/questionary-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RootQuestionaryComponent } from './components/root-questionary/root-questionary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuestionaryInputComponent,
    RootQuestionaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
