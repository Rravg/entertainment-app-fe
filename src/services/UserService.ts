import axios from "../api/axios";

export default class UserService {
    public static login(user: User) {

        return axios.post("http://localhost:8080/login", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}