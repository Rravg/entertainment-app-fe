import axios from "../api/axios";

export default class TitlesService {

    // get all titles
    public static getAll() {
        return axios.get("http://localhost:8080/titles");
    }

    // get trending titles 
    public static getTrending(email: string) {
        return axios.put("http://localhost:8080/trending", { email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}