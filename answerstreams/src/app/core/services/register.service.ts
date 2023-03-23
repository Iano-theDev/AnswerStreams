import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { RegisterUser } from "src/app/shared/models/registerUser.model";
import { AppState } from "src/app/state/app.state";

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    constructor(private store: Store<AppState>, private router: Router, private http: HttpClient) { }

    registerUser(user: RegisterUser){
        return this.http.post('http://localhost:4000/user/register', user )
    }

    
}