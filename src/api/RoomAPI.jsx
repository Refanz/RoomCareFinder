import axios from "axios";

class RoomAPI {

    constructor() {
        this.baseUrl = "http://localhost:3000/api";
    }

    async getHospitals() {
        try {
            const url = `${this.baseUrl}/posts`;
            const response = await axios.get(url);

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

}

export default RoomAPI