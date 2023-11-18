import axios from "axios";

class RoomAPI {

    constructor() {
        this.baseUrl = "http://localhost:3000/api";
    }

    async login(credentials) {
        try {
            const url = `${this.baseUrl}/users`;
            const response = await axios.post(url, {
                email: credentials.email,
                password: credentials.password
            });
            return response.data;
        } catch (err) {
            return err;
        }
    }

    async getHospitals() {
        try {
            const url = `${this.baseUrl}/hospitals`;
            const response = await axios.get(url);

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

    async getRooms() {
        try {
            const url = `${this.baseUrl}/hospitals`;
        } catch(err) {
            console.log(err);
        }
    }

}

export default RoomAPI