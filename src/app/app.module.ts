import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import {CharactersState} from "./state/characters.state";
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {CharacterModule} from "./components/character/character.module";
import {PagesModule} from "./components/pages/pages.module";
import {CommonModule} from "@angular/common";
import {ContentModule} from "./components/content/content.module";
import {FooterModule} from "./components/footer/footer.module";
import {SharedModule} from "./shared/shared.module";
import {NavbarModule} from "./components/navbar/navbar.module";

@NgModule({
  declarations: [
    AppComponent
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
