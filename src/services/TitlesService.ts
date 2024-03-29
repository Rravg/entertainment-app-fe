import axios from "../api/axios";

export default class TitlesService {

    // get all titles
    public static getAll(email: string) {
        return axios.put("http://localhost:8080/titles", { email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // get trending titles 
    public static getTrending(email: string) {
        return axios.put("http://localhost:8080/trending", { email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public static getSearch(email: string, keyword: string) {
        return axios.put("http://localhost:8080/search", { email }, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                search: keyword
            }
        })
    }
}