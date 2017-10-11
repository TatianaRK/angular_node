import {Component, OnInit} from "@angular/core";
import {HttpService} from "../services/http.service";
import {User} from "../models/user";
import {Response} from "@angular/http";

@Component ({
    selector: '#usersList',
    template: `<div><h3>Список пользователей</h3>
        <ul *ngFor="let p of users">
            <li>{{p.loginuser}} {{p.client.nameuser}} {{p.client.surname}} {{p.client.lastname}}  {{p.client.mail}}  {{p.client.phone}}</li>
        </ul>
    </div>`,
    providers: [HttpService]
})

export class UsersComponent implements OnInit{

    users: User[] = [];

    constructor(private httpService: HttpService){}

    ngOnInit() {
        this.httpService.getUsers().subscribe((data: Response) => {
            this.users = data.json().listUsers;
        });
    }

}