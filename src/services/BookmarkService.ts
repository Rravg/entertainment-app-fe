import axios from "../api/axios";

export default class BookmarkService {

    // bookmark title   
    public static setBookmark(name: string, email: string) {
        return axios.put("http://localhost:8080/bookmark", { name, email }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}