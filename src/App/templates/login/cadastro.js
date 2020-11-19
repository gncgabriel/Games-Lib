import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { loginService } from '../../services/login/login';
import * as Ladda from 'ladda';

class Cadastro extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    async cadastro() {

        var laddaBtn = Ladda.create( document.querySelector( '.ladda-btn' ) )

        laddaBtn.start();
        var data = this.state;


        var response = new loginService().cadastro(data);
        response.then(res => {
            if(res.status == 201){
                alert('Usuário cadastrado com sucesso')
            }
            laddaBtn.stop()
        })

        response.catch(error => {
            laddaBtn.stop()
            alert(error.response.data.errors[0].message);
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
                                    <h4>Cadastro</h4>
                                </Col>
                            </Row>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nome de usuário</Form.Label>
                                    <Form.Control type="text" placeholder="Digite seu nome de usuário" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu e-mail" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                                    <Form.Text className="text-muted">
                                        Nunca divulgaremos seu e-mail
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Digite sua senha" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                </Form.Group>

                                <Button className="ladda-btn" data-style="zoom-in" variant="primary" type="Button" onClick={() => this.cadastro()} >
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