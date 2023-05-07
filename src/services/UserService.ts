import axios from "../api/axios";

export default class UserService {
    public static login(user: User) {

        return axios.post("http://localhost:8080/login", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public static signup(user: User) {

        return axios.post("http://localhost:8080/signup", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public static logout(user: User) {
        return axios.get("http://localhost:8080/logout");
    }
}