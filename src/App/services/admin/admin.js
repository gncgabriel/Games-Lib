import axios from 'axios';
import {util} from '../util';

export class adminService {
   
    async cadastroGames(data) {
        var myUtil = new util();
        return await axios.post('https://adonis-games-library-api.herokuapp.com/game', data, { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }
}