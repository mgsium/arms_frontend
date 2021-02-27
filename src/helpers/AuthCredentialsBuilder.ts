import AuthCredentails from "../types/AuthCredentials";

export default class AuthCredentialsBuilder {

    private email: string;
    private password: string;

    public setEmail(email: string) { this.email = email }
    public setPassword(password: string) { this.password = password }

    public getEmail() { return this.email }
    public getPassword() { return this.password }    

    public buildUser(): AuthCredentails {
        return {
            email: this.email,
            password: this.password
        }
    }
}