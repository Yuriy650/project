import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
PagesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule{

}
