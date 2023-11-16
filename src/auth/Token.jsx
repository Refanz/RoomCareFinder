class Token {
    #tokenLogin = "token";

    getToken() {
        const token = localStorage.getItem(this.#tokenLogin);
        return JSON.parse(token);
    }

    saveToken(token) {
        localStorage.setItem(this.#tokenLogin, JSON.stringify(token));
    }
}

export default Token