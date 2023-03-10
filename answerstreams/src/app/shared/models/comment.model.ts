export interface Comment {
    commentId: string;
    questionId?: string;
    answerId?:string;
    userId: string;
    body: string;
    createdAt: string;
}