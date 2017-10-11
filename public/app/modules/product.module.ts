import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavigateComponent} from "../components/navigate.component";
import {CategoryComponent} from "../components/category.component";
import {BrowserModule} from "@angular/platform-browser";
import {GoodsComponent} from "../components/goods.component";
import {AddproductComponent} from "../components/addproduct.component";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule, BrowserModule],
    declarations: [NavigateComponent, CategoryComponent, GoodsComponent, AddproductComponent],
    exports: [NavigateComponent, CategoryComponent, GoodsComponent, AddproductComponent]
})

export class ProductModule {

}