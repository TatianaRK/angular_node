import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";

@Component({
    selector: '#app',
    templateUrl: 'app/template/app.component.html',
    styleUrls: ['css/app.css'],
    providers: [HttpService]
})

export class AppComponent implements OnInit {

    authorize: boolean = false;
    admin: boolean = false;

    constructor(private httpService: HttpService, private router: Router) {}

    ngOnInit(): void {
        this.httpService.isAuthenticated().subscribe(data => {
            if(data.json().message === 'authenticated') {
                this.authorize = true;
                this.admin = (data.json().user.role === 'admin') ? true : false;
            }
            else
                this.authorize = false;
        });
    }

    logout() {
        this.httpService.logout().subscribe(data => {
            this.authorize = false;
            this.admin = false;
            this.router.navigate(['/']);
        });
    }
}