import {NgModule} from "@angular/core";
import {CharacterComponent} from "./character.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CharacterComponent,
  ]
})
export class CharacterModule{

}
