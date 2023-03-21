class AnswerCommentModel {

    constructor(
        public commentId: string,
        public body: string,
        public userId: string,
        public answerId: string,
        public createdAt: string
    ){}
}