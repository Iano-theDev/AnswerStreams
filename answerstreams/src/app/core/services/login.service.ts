import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoggedInUser } from "src/app/shared/models/loggedInUser.model";
import { LoginInterface } from "src/app/shared/models/loginInterface.model";
import { LoggedInUserState } from "src/app/state/reducers/login.reducers";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    user: any;
    constructor(private router: Router,private http: HttpClient) { }
    login(user: LoginInterface): Observable<LoggedInUser> {
        console.log("Inside login service, ", user)
        return this.http.post<LoggedInUser>('http://localhost:4000/user/login', user)
    }

    logout() {
        localStorage.removeItem('token')
      }
}
