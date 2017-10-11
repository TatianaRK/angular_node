import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Order} from "../models/order";

@Component({
    selector: 'goods',
    templateUrl: 'app/template/goods.component.html',
    styleUrls: ['css/products.css'],
    providers: [HttpService]
})

export class GoodsComponent implements OnInit {

    goods: any;
    check: boolean = false;
    authenticate: boolean = false;
    numb: number = 1;
    order: Order = new Order();
    userName: string;
    date: string;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.httpService.getProduct(params['goods']))
            .subscribe(data => {
                this.goods = data.json().product;
            });

        this.httpService.isAuthenticated().subscribe(data => {
            if(data.json().message === 'authenticated') {
                this.authenticate = true;
                this.userName = data.json().user.login;
            }
        });
    }

    change() {
        this.check = !this.check;
    }

    addOrder(articul: string) {
        this.order.loginUser = this.userName;
        this.order.articul = articul;
        this.order.number = this.numb;
        this.order.summ = this.goods[0].cost * this.numb;
        this.order.date = this.date;
        this.order.status = 'Зарезервированно';
        this.order.delivery = this.check;
        this.httpService.addOrder(this.order).subscribe(data => {
            if(data.json().message === 'Order added')
                this.router.navigate(['/products']);
        });
    }
}