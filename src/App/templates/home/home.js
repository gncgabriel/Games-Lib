import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { util } from '../../services/util';
import { gameService } from '../../services/user/games';
import * as Ladda from 'ladda';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            games: [],
            myList: []
        }
        var myUtils = new util();

        if (myUtils.isLogged() === false) {
            alert('Faça login para acessar essa área');
            myUtils.openHomePage();
        }

        if (myUtils.isAdm() === true) {
            myUtils.openHomePage();
        }

    }

    listarGames() {

        var laddaBtn = Ladda.create(document.querySelector('.ladda'))

        laddaBtn.start();

        const response = new gameService().listarGames({});

        response.then(res => {
            this.setState({ games: res.data.data })
            laddaBtn.stop()
            document.getElementsByClassName("ladda")[0].classList.add("d-none")

        })

        const responseMyList = new gameService().listarMeusGames();

        responseMyList.then(res => {
            this.setState({ myList: res.data.data })
            
        })
    }

    componentDidMount() {
        this.listarGames();
    }

    adicionarALista(id) {
        var myUtils = new util();

        var data = { game_id: id, user_id: myUtils.getUserId() }

        var response = new gameService().adicionarGame(data);
        response.then(res => {
            if (res.status === 201) {
                alert('Adicionado com sucesso')
                window.location.reload();
            }
        })
    }

    temNaLista(idGame) {
        var tem = false;
        this.state.myList.forEach((myGame) => {
            if (myGame.game_id == idGame) {
                tem = true;

            }
        })
        return tem;
    }

    render() {


        return (
            <div>
                <NavigationBar />
                <div className="p-0 m-0">
                    <div className="justify-content-around d-flex">
                        
                        <Col lg={12} className="" style={{ marginTop: "65px" }}>
                        <Button className="ladda" data-style="zoom-in"></Button>

                            <Row className="justify-content-start">

                                {
                                    this.state.games.map((game) => {
                                        if (this.temNaLista(game.id) === false) {
                                            return <Card key={game.id} style={{ width: '320px', "marginBottom": "20px", marginLeft: "10px" }}>
                                                <Card.Img variant="top" src={game.image} />
                                                <Card.Body>
                                                    <Card.Title>{game.name}</Card.Title>
                                                    <Card.Text>
                                                        {game.category}
                                                    </Card.Text>
                                                    <Button variant="success" onClick={() => this.adicionarALista(game.id)}>Adicionar à Lista</Button>
                                                </Card.Body>
                                            </Card>
                                        }
                                    })
                                }
                            </Row>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;