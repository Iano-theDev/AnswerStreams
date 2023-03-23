import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Question } from "src/app/shared/models/question.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class QuestionService{
    subscribe: any;
    constructor(private http: HttpClient) { }

    getQuestions() {
        return this.http.get<Question[]>('http://localhost:4000/questions/')
    }

    postQuestion(question: Question) {
        return this.http.post<Question>('http://localhost:4000/questions', question)
    }
}