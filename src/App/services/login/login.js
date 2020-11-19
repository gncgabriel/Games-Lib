import axios from 'axios';

export class loginService {
    async login(data) {
        return axios.post('https://adonis-games-library-api.herokuapp.com/auth', data);
    }
    
    async cadastro(data) {
        return await axios.post('https://adonis-games-library-api.herokuapp.com/user', data, { headers: { Authorization: "" } });
    }
}