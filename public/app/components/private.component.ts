import {Component, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {HttpService} from "../services/http.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'private',
    templateUrl: 'app/template/private.component.html',
    styles: [`
        #privateData {
            width: 80%;
            margin: 50px auto;
            font-size: 16px;
        }
        
        li {
            list-style-type: none;
            margin-bottom: 10px;
        }
        
        #bucket {
            font-size: 16px;
        }
    `]
})

export class PrivateComponent implements OnInit {

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    user: any;
    orders: any;
    nullOrder: boolean = false;
    confirm: boolean = true;
    myForm: FormGroup;
    public mask = ['+', '3', '7', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    temp: boolean = false;

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.httpService.isAuthenticated().subscribe(data => {
            this.user = data.json().user;;
            this.httpService.getOrderFromLogin(this.user.login).subscribe(data => {
                this.orders = data.json().listOrders;
                if(this.orders.length === 0) {
                    this.nullOrder = true;
                } else {
                    this.nullOrder = false;
                }
            });
        });
    }

    loadTemplate() {
        if (this.temp) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    confirmOrder(id: Object, i: number) {
        this.orders[i].status = 'Подтвержден';
        this.httpService.editOrder(this.orders[i], id.toString()).subscribe(data => {});
    }

    edit() {
        this.temp = true;
        this.myForm = new FormGroup({
            name: new FormControl(this.user.client.name, Validators.required),
            surname: new FormControl(this.user.client.surname, Validators.required),
            lastname: new FormControl(this.user.client.lastname, Validators.required),
            mail: new FormControl(this.user.client.mail, [Validators.required, Validators.pattern('[a-zA-Z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
            phone: new FormControl(this.user.client.phone, [Validators.required])
        });
    }

    saveData() {
        this.temp = false;
        this.user.client = this.myForm.value;
        this.httpService.editUser(this.user.client, this.user._id).subscribe(data => {});
    }
}