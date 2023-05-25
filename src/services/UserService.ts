import axios from "../api/axios";

export default class UserService {

    // Handles log in request
    public static login(user: User) {

        return axios.post("http://localhost:8080/login", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    // Handles log out request 
    public static signup(user: User) {

        return axios.post("http://localhost:8080/signup", user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    // Handles log out request
    public static logout() {
        return axios.get("http://localhost:8080/logout");
    }
}