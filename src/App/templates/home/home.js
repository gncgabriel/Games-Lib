import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';


class Cadastro extends Component {

    constructor() {
        super();
        
        var isLoggedGameLib = localStorage.getItem("isLoggedGameLib");
        
        if(isLoggedGameLib != 'true'){
            alert('Faça Login para continuar')
            window.open('/login', '_self')
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