import QuestionModel from "./question.model";

class UserModel {
    constructor(
        public userId: string,
        public name: string,
        public email: string,
        public occupation: string,
        public online: boolean,
        public createdsAt: string,
    ){}
}
