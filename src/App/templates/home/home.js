import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { util } from '../../services/util';


class Cadastro extends Component {

    constructor() {
        super();
        var myUtils = new util();

        if (myUtils.isLogged() === false) {
            alert('Faça login para acessar essa área');
            myUtils.openHomePage();
        }

        if (myUtils.isAdm() === true) {
            myUtils.openHomePage();
        }

    }



    render() {


        return (
            <div>
                <NavigationBar />
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4} className="mt-4">
                            <Row>
                                <Col lg={12} className="text-center">
                                    <h4>Bem Vindo</h4>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cadastro;