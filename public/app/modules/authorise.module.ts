import {NgModule} from "@angular/core";
import {TextMaskModule} from "angular2-text-mask";
import {RegistrationComponent} from "../components/registration.component";
import {LoginComponent} from "../components/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    exports: [LoginComponent, RegistrationComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, TextMaskModule]
})

export class AuthoriseModule {

}