import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {FooterComponent} from "./footer.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterModule{

}
