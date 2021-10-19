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
import {CharacterModule} from "./components/character/character.module";
import {PagesModule} from "./components/pages/pages.module";
import {CommonModule} from "@angular/common";
import {ContentModule} from "./components/content/content.module";
import {FooterModule} from "./components/footer/footer.module";
import {SharedModule} from "./shared/shared.module";
import {NavbarModule} from "./components/navbar/navbar.module";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContentModule,
    CharacterModule,
    FooterModule,
    PagesModule,
    NavbarModule,
    MatIconModule,
    SharedModule,
    CommonModule,
    NgxsModule.forRoot([
      CharactersState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
