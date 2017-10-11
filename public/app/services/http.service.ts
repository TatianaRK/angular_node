import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from "../models/user";
import {Order} from "../models/order";
import {Replies} from "../models/replies";

@Injectable()
export class HttpService{

    constructor(private http: Http){ }

    postUsers(obj: User){
        const body = JSON.stringify(obj);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/signup', body, options)
            .map((resp:Response)=>resp.json())
            .catch((error:any) =>{return Observable.throw(error);});
    }

    getUsers(){
        return this.http.get('/api/users');
    }

    getUser(id: string){
        return this.http.get('/api/user/' + id);
    }

    editUser(json: string, id: Object) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.put('/api/user/' + id, json, options);
    }

    authorise(loginuser: string, password: string) {
        const json = {"login": loginuser, "password": password};

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/login', JSON.stringify(json), options);
    }

    logout() {
        return this.http.get('/api/logout');
    }

    uniqLogin(login: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.get('/api/loginUser/' + login, options);
    }

    getPriductsFromCategory(category: string) {
        return this.http.get('/api/products/' + category);
    }

    isAuthenticated() {
        return this.http.get('/api/isauthenticate');
    }

    getProduct(articul: string) {
        return this.http.get('/api/product/' + articul);
    }

    addProduct(json: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/api/product', json, options);
    }

    editProduct(json: string, id: Object) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.put('/api/product/' + id, json, options);
    }

    deleteProduct(id: number) {
        return this.http.delete('/api/product/' + id);
    }

    addOrder(obj: Order){
        const body = JSON.stringify(obj);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/order', body, options);
    }

    getOrderFromLogin(login: string) {
        return this.http.get('/api/orders/' + login);
    }

    editOrder(json: string, id: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.put('/api/order/' + id, json, options);
    }

    getReplies() {
        return this.http.get('/api/replies');
    }

    addReply(json: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/reply', json, options);
    }

    deleteReply(id: string) {
        return this.http.delete('/api/reply/' + id);
    }
}