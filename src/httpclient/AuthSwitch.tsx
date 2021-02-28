export default class AuthSwitch {

    static base_backend_url: string = "http://localhost:3001";

    static async getUser() {
        fetch(`${this.base_backend_url}/getuser`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }

}