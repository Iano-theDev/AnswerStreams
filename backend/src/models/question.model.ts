class QuestionModel {
    questionId: string;
    userId: string;
    title: string;
    body: string;
    createdAt: string;

    constructor(
        questionId: string,
        userId: string,
        title: string,
        body: string,
        createdAt: string
    ) {
        this.questionId = questionId;
        this.userId = userId;
        this.title = title;
        this.body = body;
        this.createdAt = createdAt;
    }
}

export default QuestionModel
