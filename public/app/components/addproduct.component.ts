import {Component} from "@angular/core";
import {HttpService} from "../services/http.service";

@Component({
    selector: 'add-product',
    templateUrl: 'app/template/addproduct.component.html',
    styles: [`
        select option {
            color: #000;
        }
        
        input, select, textarea, button {
            margin-bottom: 8px;
        }

        #addProduct {
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;
        }
    `],
    providers: [HttpService]
})

export class AddproductComponent {

    temp: string;
    errArticul: boolean = false;
    messageArticul: string;
    success: boolean = true;

    articul: number;
    nameProduct: string;
    category: string;
    about: string;
    material: string;
    colors: string;
    w_h: string;
    quantity: number;
    cost: number;
    status: string;
    image: string;

    constructor(private httpService: HttpService) {}

    addProduct() {

        if(this.articul.toString().length < 6) {
            this.errArticul = true;
            this.messageArticul = 'Артикул должен иметь не менее 6 цифр!';
            return;
        } else
            this.errArticul = false;

        let json = JSON.stringify({
            articul: this.articul,
            name: this.nameProduct,
            category: this.category,
            about: this.about,
            material: this.material,
            colors: this.colors,
            w_h: this.w_h,
            quantity: this.quantity,
            cost: this.cost,
            status: this.status,
            image: this.image
        });

        this.httpService.addProduct(json).subscribe(data => {
            if(data.json().message === 'Product added') {
                this.success = false;
                this.articul = null;
                this.nameProduct = null;
                this.category = null;
                this.about = null;
                this.material = null;
                this.colors = null;
                this.w_h = null;
                this.quantity = null;
                this.cost = null;
                this.status = null;
                this.image = null;
            }
        });
    }

}