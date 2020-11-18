import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

class login extends Component {

    async login() {

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
                                    <h4>Login</h4>
                                </Col>
                            </Row>
                            <Form>
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
                                <Button variant="primary" type="submit">
                                    Fazer Login
                        </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default login;