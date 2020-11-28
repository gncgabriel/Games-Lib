import axios from 'axios';
import {util} from '../util';

export class adminService {
   
    async cadastroGames(data) {
        var myUtil = new util();
        return await axios.post('https://adonis-games-library-api.herokuapp.com/game', data, { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }

    async deletarGames(id){
        var myUtil = new util();
        return await axios.delete(`https://adonis-games-library-api.herokuapp.com/game/${id}`, { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }
}