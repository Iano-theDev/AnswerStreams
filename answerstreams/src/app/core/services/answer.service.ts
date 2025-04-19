import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Answer } from "src/app/shared/models/answer.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AnswerService {
    subsacribe: any;
    answersUrl: string = 'http://localhost:4000/answers'

    constructor(private http: HttpClient){}

    getAnswers(): Observable<Answer[]>{
        return this.http.get<Answer[]>(this.answersUrl)
    }
    addAnswer(answer: any): Observable<any>{
        return this.http.post(this.answersUrl, answer)
    }
}

