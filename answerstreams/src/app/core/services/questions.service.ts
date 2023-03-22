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
    // questions$: Question[] = [
    //     {
    //         questionId: '1',
    //         heading: 'Why is the sky red today?',
    //         body: 'Some thing about the sky is not right today...',
    //         votes: 2,
    //         answers: [],
    //         comments: [],
    //         userId: '12',
    //         createdAt: '12/03/2021'
    //     },
    //     {
    //         questionId: '1',
    //         heading: 'Why is the sky red today?',
    //         body: 'Some thing about the sky is not right today...',
    //         votes: 2,
    //         answers: [],
    //         comments: [],
    //         userId: '12',
    //         createdAt: '12/03/2021'
    //     },
    //     {
    //         questionId: '1',
    //         heading: 'Why is the sky red today?',
    //         body: 'Some thing about the sky is not right today...',
    //         votes: 2,
    //         answers: [],
    //         comments: [],
    //         userId: '12',
    //         createdAt: '12/03/2021'
    //     }
    // ]

    getQuestions() {
        return this.http.get<Question[]>('http://localhost:4000/questions/')
    }
}