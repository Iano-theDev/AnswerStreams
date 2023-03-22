import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Answer } from "src/app/shared/models/answer.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AnswerService {
    subsacribe: any;

    constructor(private http: HttpClient){}

    getAnswers(): Observable<Answer[]>{
        return this.http.get<Answer[]>('http://localhost:4000/answers')
    }
}

