import {Component} from "@angular/core";
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'login',
    templateUrl: 'app/template/login.component.html',
    styles: [`
        #login {
            margin: 200px auto;
            width: 80%;
        }
    `],
    providers: [HttpService]
})

export class LoginComponent {

    message: string;
    visible: string = "none";
    loginForm : FormGroup;

    constructor(private httpService: HttpService, private router: Router){
        this.loginForm = new FormGroup({
            "loginuser": new FormControl("", Validators.required),
            "pass": new FormControl("", Validators.required)
        });
    }

    auth() {
        this.httpService.authorise(this.loginForm.value.loginuser, this.loginForm.value.pass).subscribe(data => {
            if(data.json().message === 'fail') {
                this.message = "Неверный логин и/или пароль";
                this.visible = "block";
            }
            else {
                this.visible = "none";
                window.location.href = '/';
            }
        });
    }

    reg() {
        this.router.navigate(['/register']);
    }
}