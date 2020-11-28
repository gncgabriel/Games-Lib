import axios from 'axios';
import {util} from '../util';

export class gameService {
   
    async listarGames(data) {
        var myUtil = new util();
        return await axios.get('https://adonis-games-library-api.herokuapp.com/game?page=1&limit=999999', { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }

    async listarMeusGames(){
        var myUtil = new util();
        return await axios.get(`https://adonis-games-library-api.herokuapp.com/list/${myUtil.getUserId()}?page=1&limit=999999`, { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }

    async adicionarGame(data){
        var myUtil = new util();
        return await axios.post(`https://adonis-games-library-api.herokuapp.com/list`, data, { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }

    async removerGame(gameId){
        var myUtil = new util();
        return await axios.delete(`https://adonis-games-library-api.herokuapp.com/list/${gameId}`, { headers: { Authorization: `Bearer ${myUtil.getUserToken()}` } });
    }
}