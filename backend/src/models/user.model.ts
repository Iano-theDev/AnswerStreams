class UserModel {
    constructor(
        public userId: string,
        public name: string,
        public email: string,
        public password: string,
        public role: string,
        public occupation: string,
        public imageURL: string,
        public online: boolean,
        public createdsAt: string,
    ){}
}
