import User from "../types/User";

export default class UserBuilder {

    private email: string;
    private username: string;
    private password: string;
    private isMentor: boolean;

    constructor() {
        this.isMentor = false;
    }

    public setEmail(email: string) { this.email = email }
    public setUsername(username: string) { this.username = username }
    public setPassword(password: string) { this.password = password }
    public setMentorStatus(isMentor: boolean) { this.isMentor = isMentor }

    public getEmail() { return this.email }
    public getUsername() { return this.username }
    public getPassword() { return this.password }    
    public getMentorStatus() { return this.isMentor }

    public buildUser(): User {
        return {
            email: this.email,
            username: this.username,
            password: this.password,
            isMentor: this.isMentor,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"
        }
    }
}