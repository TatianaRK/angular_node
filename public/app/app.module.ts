import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './components/app.component';
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {UsersComponent} from "./components/users.component"
import {HttpModule} from '@angular/http';
import {AuthoriseModule} from "./modules/authorise.module";
import {ProductModule} from "./modules/product.module"
import {LoginComponent} from "./components/login.component";
import {RegistrationComponent} from "./components/registration.component";
import {NavigateComponent} from "./components/navigate.component";
import {CategoryComponent} from "./components/category.component";
import {GoodsComponent} from "./components/goods.component";
import {PrivateComponent} from "./components/private.component";
import {AddproductComponent} from "./components/addproduct.component";
import {ContactsComponent} from "./components/contacts.component";
import {YaCoreModule} from 'angular2-yandex-maps';
import {RepliesComponent} from "./components/replies.component";
import {TextMaskModule} from "angular2-text-mask";

const itemRoutes: Routes = [
    {path: ':category', component: CategoryComponent},
    {path: ':category/:goods', component: GoodsComponent}
];

const appRoutes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'users', component: UsersComponent},
    {path: 'login', component: LoginComponent},
    {path: 'private', component: PrivateComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'products', component: NavigateComponent},
    {path: 'products', component: NavigateComponent, children: itemRoutes},
    {path: 'addproduct', component: AddproductComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'replies', component: RepliesComponent}
];

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule, AuthoriseModule, ReactiveFormsModule, ProductModule, YaCoreModule.forRoot(), TextMaskModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, UsersComponent, PrivateComponent, ContactsComponent, RepliesComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }