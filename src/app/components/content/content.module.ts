import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {ContentComponent} from "./content.component";
import {CharacterModule} from "../character/character.module";
import {AppModule} from "../../app.module";
import {PagesModule} from "../pages/pages.module";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FooterModule} from "../footer/footer.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    PagesModule,
    FooterModule,
    SharedModule,
    RouterModule.forChild([

    ]),
    CharacterModule
  ],
  exports: [
    ContentComponent,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentModule{

}
