import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { util } from '../../services/util';
import { gameService } from '../../services/user/games';


class Cadastro extends Component {

    constructor() {
        super();
        this.state = {
            games: []
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
        const response = new gameService().listarGames({});

        response.then(res => {
            this.setState({ games: res.data.data })

            console.log(this.state.games)
        })
    }

    componentDidMount() {
        this.listarGames();
    }

    render() {


        return (
            <div>
                <NavigationBar />
                <div className="p-0 m-0">
                    <Row className="justify-content-center">
                        <Col lg={12} className="" style={{"margin-top":"56px"}}>
                            

                            <Row className="justify-content-center">
                                {
                                    this.state.games.map((game) => (
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={game.image} />
                                            <Card.Body>
                                                <Card.Title>{game.name}</Card.Title>
                                                <Card.Text>
                                                    {game.category}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Cadastro;