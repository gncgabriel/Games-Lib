import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { util } from '../../services/util';
import { gameService } from '../../services/user/games';
import * as Ladda from 'ladda';

class Lista extends Component {

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
            

        })

        const responseMyList = new gameService().listarMeusGames();

        responseMyList.then(res => {
            this.setState({ myList: res.data.data })
            laddaBtn.stop()
            document.getElementsByClassName("ladda")[0].classList.add("d-none")
        })
    }

    componentDidMount() {
        this.listarGames();
    }

    removerDaLista(id) {
        var myUtils = new util();



        var response = new gameService().removerGame(id);
        response.then(res => {

            alert('Removido com sucesso')
            window.location.reload();

        })
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
                                <div className="ladda" data-style="zoom-in">

                                </div>
                                {
                                    this.state.myList.map((game) => (

                                        <Card key={game.game.id} style={{ width: '300px', "marginBottom": "20px", marginLeft: "10px" }}>
                                            <Card.Img variant="top" src={game.game.image} />
                                            <Card.Body>
                                                <Card.Title>{game.game.name}</Card.Title>
                                                <Card.Text>
                                                    {game.game.category}
                                                </Card.Text>
                                                <Button variant="danger" onClick={() => this.removerDaLista(game.id)}>Remover</Button>
                                            </Card.Body>
                                        </Card>

                                    ))
                                }
                            </Row>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lista;