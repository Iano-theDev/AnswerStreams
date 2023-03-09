export interface User {
    id: string;
    name: string;
    email: string;
    occupation: string;
    online: boolean;
    questions: [];
    answers: [];
    comments: [];
    createdsAt: string;
}