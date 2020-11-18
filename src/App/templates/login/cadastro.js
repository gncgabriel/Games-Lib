import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

class Cadastro extends Component {

    async cadastro() {

    }

    render() {
        return (
            <div>
                <NavigationBar />
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4} className="mt-4">
                            <Row>
                                <Col lg={12}>
                                    <h4>Cadastro</h4>
                                </Col>
                            </Row>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Digite seu nome" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                                    <Form.Text className="text-muted">
                                        Nunca divulgaremos seu e-mail
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Digite sua senha" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPasswordConfirm">
                                    <Form.Label>Confirme sua senha</Form.Label>
                                    <Form.Control type="password" placeholder="Digite sua senha" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Cadastrar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cadastro;