class QuestionCommentModel {

    constructor(
        public commentId: string,
        public body: string,
        public userId: string,
        public questionId: string,
        public createdAt: string
    ){}
}

export default QuestionCommentModel