import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ContentComponent} from "../content/content.component";
import {ContentModule} from "../content/content.module";

@NgModule({
  declarations:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ContentComponent},
    ])
  ],
  exports:[
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarModule{

}
