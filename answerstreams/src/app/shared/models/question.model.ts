export interface Question {
    id: string;
    heading: string;
    body: string;
    votes: number;
    answers: [];
    comments: [];
    user: string;
    createdAt: string;
}