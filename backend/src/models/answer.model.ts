class AnswerModel {
    
    constructor(
        public answerId: string,
        public questionId: string,
        public userId: string,
        public body: string,
        public voteCount: string,
        public createdAt: string,
    ){}
}