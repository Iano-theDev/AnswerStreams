import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoggedInUser } from "src/app/shared/models/loggedInUser.model";
import { LoginInterface } from "src/app/shared/models/loginInterface.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private router: Router,private http: HttpClient) { }
    login(user: LoginInterface): Observable<LoggedInUser> {
        return this.http.post<LoggedInUser>('http://localhost:4000/user/login', user)
    }
}
