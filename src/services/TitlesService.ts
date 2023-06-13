import axios from "../api/axios";

export default class TitlesService {

    // get all titles
    public static getAll() {
        return axios.get("http://localhost:8080/titles");
    }

    // get trending titles 
    public static getTrending() {
        return axios.get("http://localhost:8080/trending");
    }
}