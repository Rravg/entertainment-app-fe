import axios from "../api/axios";

export default class TitlesController {

    // get all titles
    public static getAll() {
        return axios.get("http://localhost:8080/titles");
    }
}