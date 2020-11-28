import axios from 'axios';
import {util} from '../util';

export class gameService {
   
    async listarGames(data) {
        var myUtil = new util();
        return await axios.get('https://adonis-games-library-api.herokuapp.com/game?page=1&limit=999999', { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }
}