import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import {NgxsModule} from "@ngxs/store";
import {CharactersState} from "./state/characters.state";

import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { CharacterComponent } from './components/character/character.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FooterComponent } from './components/footer/footer.component';
import { PagesComponent } from './components/pages/pages.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CharacterComponent,
    NavbarComponent,
    FooterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      CharactersState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
