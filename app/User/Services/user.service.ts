import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/throw';

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    private url = 'http://z3/user';

    getUsers() : Observable<User[]> {
        return this.http.get(this.url)
            .map((res:Response) => res.json()._embedded.user)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }

    addUser(user: User): Observable<User> {
        let bodyString = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, bodyString, options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUser(id: number): Observable<User> {
        return this.http.get(this.url+"/"+id)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}