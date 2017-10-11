import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {HttpService} from "../services/http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Product} from "../models/product";

@Component({
    selector: 'listProduct',
    templateUrl: 'app/template/category.component.html',
    styleUrls: ['css/products.css'],
    providers: [HttpService]
})

export class CategoryComponent implements OnInit {

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    editedProduct: Product;
    products: Array<Product>;
    statusMessage: string;
    temp: boolean = false;
    category: string;
    authenticate: boolean = false;
    admin: boolean = false;
    nullField: boolean = false;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
        this.products = new Array<Product>();
    }

    ngOnInit() {
        this.loadProducts();

        this.httpService.isAuthenticated().subscribe(data => {
            if(data.json().message === 'authenticated') {
                this.authenticate = true;
                if(data.json().user.role === 'admin') {
                    this.admin = true;
                } else
                    this.admin = false;
            }
        });

    }

    private loadProducts() {
        this.route.params
            .switchMap((params: Params) => this.httpService.getPriductsFromCategory(params['category']))
            .subscribe(data => {
                this.products = data.json().listProducts;
            });
    }

    editProduct(product: Product) {
        this.editedProduct = new Product(product._id, product.articul, product.name, product.about, product.colors, product.material, product.w_h, product.quantity, product.cost, product.status, product.image, product.salesText, 0);
    }

    loadTemplate(product: Product) {
        if (this.editedProduct && this.editedProduct.articul == product.articul) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    saveProduct() {
        this.httpService.editProduct(JSON.stringify(this.editedProduct), this.editedProduct._id.toString()).subscribe(resp => {
            this.statusMessage = 'Данные успешно обновлены';
            this.loadProducts();
        });
        this.editedProduct = null;

    }

}