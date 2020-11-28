import React, { Component } from 'react';
import NavigationBar from '../components/navbar';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { util } from '../../services/util';
import { adminService } from '../../services/admin/admin';
import { gameService } from '../../services/user/games';

import * as Ladda from 'ladda';


class Admin extends Component {

    constructor() {
        super();
        this.state = {
            listGames: [],

        }
        var myUtils = new util();

        

        if (myUtils.isLogged() === false) {
            alert('Faça login para acessar essa área');
            myUtils.openHomePage();
        }

        if (myUtils.isAdm() === false) {
            alert('Você não é um administrador')
            myUtils.openHomePage();
        }

    }
    componentDidMount(){
        this.listarGames();
    }

    listarGames(){
        var laddaBtn = Ladda.create(document.querySelector('.ladda'))

        laddaBtn.start();

        var games = new gameService().listarGames();
        games.then(res => {
            laddaBtn.stop()
            this.setState({ listGames: res.data.data })
            document.getElementsByClassName("load")[0].classList.add("d-none")



        })
    }

    excluir(id) {
        var games = new adminService().deletarGames(id);
        games.then(res => {
            alert('Game excluído com sucesso')
            window.location.reload()
        })

    }



    render() {


        return (
            <div>
                <NavigationBar />
                <div className="banner_admin">

                </div>
                <div className="title_banner">
                    <h1>Administrador</h1>
                </div>
                <Container className="container_game_form">

                    <Row className="justify-content-center">
                        <Col lg={12} className="mt-3">
                            <h4 className="text-center">Lista de Jogos</h4>
                        </Col>
                        <Col lg={12} className="mt-4">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col lg={12} sm={12} className="">
                                    <div className="listaJogos">
                                        <div className="row load">
                                            <div className="img">
                                                <Button style={{width:"70px"}} className="ladda" data-style="zoom-in"></Button>
                                            </div>

                                            <div className="start">
                                                <h5>Carregando ...</h5>
                                            </div>


                                        </div>
                                        {
                                            this.state.listGames.map((game) => (
                                                <div className="row">
                                                    <div>
                                                        <img className="img" src={game.image} />
                                                    </div>

                                                    <div className="start">
                                                        <h5>{game.name}</h5>
                                                    </div>

                                                    <div className="end">
                                                        <span>{game.category}</span>
                                                    </div>

                                                    <div className="btn_controles">
                                                        <a className="d-none" href={"/".concat(game.id)}>Editar</a>
                                                        <a className="text-danger" href="#" onClick={() => this.excluir(game.id)}>Excluir</a>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Admin;