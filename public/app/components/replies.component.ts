import {Component, OnInit} from "@angular/core";
import {Replies} from "../models/replies"
import {HttpService} from "../services/http.service";

@Component({
    selector: 'replies',
    templateUrl: 'app/template/replies.component.html',
    styles: [`
        .replies {
            width: 100%;
            margin-top: 40px;
        }
        
        .name {
            font-weight: bold;
            font-size: 16px;
        }
        
        .date {
            font-size: 16px;
            color: #ccc;
        }

        #repliesList {
            width: 80%;
            margin: 50px auto;
            margin-top: 150px;
        }
    `]
})

export class RepliesComponent implements OnInit {

    replies: Replies[] = [];
    reply: string;
    authenticate: boolean = false;
    curLoginUser: string;
    admin: boolean = false;

    constructor(private http: HttpService) {}

    ngOnInit() {
        this.http.getReplies().subscribe(data => this.replies = data.json().listReplies);

        this.http.isAuthenticated().subscribe(data => {
            if(data.json().message === 'authenticated') {
                this.authenticate = true;
                this.curLoginUser = data.json().user.login;

                if(data.json().user.role === 'admin') {
                    this.admin = true;
                } else
                    this.admin = false;
            }
        });
    }

    addReply(reply: string) {
        this.http.addReply(JSON.stringify({ loginUser: this.curLoginUser, message: reply })).subscribe(data => {});
        this.replies.unshift(new Replies(this.curLoginUser, reply, new Date()));
        this.reply = '';
    }

    removeReply(id: Object, i: number) {
        this.http.deleteReply(id.toString()).subscribe(data => {
            this.replies.splice(i, 1);
        });
    }

}