import {Component} from "@angular/core";
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {Client} from "../models/client";

@Component({
    selector: 'register',
    templateUrl: 'app/template/register.component.html',
    styles: [`
        #register {
            width: 80%;
            margin: 50px auto;
        }
        
        .errorField {
            background-color: #e4b9b9;
        }
        
    `],
    providers: [HttpService]
})

export class RegistrationComponent {

    client: Client = new Client();
    user: User = new User();
    public mask = ['+', '3', '7', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    errLogin: boolean = false;

    constructor(private httpService: HttpService, private router: Router){}

    regist() {
        this.user.client = this.client;
        this.httpService.postUsers(this.user).subscribe(data => {
            if(data.message === 'User register')
                this.router.navigate(['/login']);
        });
    }

    loginUser() {
        this.router.navigate(['/login']);
    }

    checkUniq(login: string) {
        this.httpService.uniqLogin(login).subscribe(data => {
            let bool = data.json().user == '' ? false : true;
            this.errLogin = !bool;
        });
    }
}