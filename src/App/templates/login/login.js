import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { loginService } from '../../services/login/login';
import * as Ladda from 'ladda';

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    async login() {
        var laddaBtn = Ladda.create(document.querySelector('.ladda-btn'))
        laddaBtn.start();
        var data = this.state;
        var response = new loginService().login(data);
        response.then(res => {
            console.log(res)
            laddaBtn.stop()
            if (res.status === 200) {
                localStorage.setItem('isLoggedGameLib', true)
                localStorage.setItem('gameLib', JSON.stringify(res.data))

                if (res.data.type === "Adm") {
                    window.open('/admin', '_self')
                } else {
                    window.open('/home', '_self')
                }
            }
        })

        response.catch(error => {
            laddaBtn.stop()
            alert(error.response.data[0].message);
        })
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
                                    <Form.Control type="email" placeholder="Digite seu e-mail" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Digite sua senha" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                </Form.Group>
                                <Button className="ladda-btn" data-style="zoom-in" variant="primary" type="Button" onClick={() => this.login()}>
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