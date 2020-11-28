import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { util } from '../../services/util';

class NavigationBar extends Component {

    constructor() {
        super()
        this.state = {
            isLogged: localStorage.getItem("isLoggedGameLib"),
        }
    }

    logout() {
        var myUtil = new util();
        myUtil.logoff();
    }

    render() {

        var myUtil = new util();
        let myNavDropDown;
        let myNav;

        if (myUtil.isLogged() === true) {
            myNavDropDown = <NavDropdown title="Acesso" id="basic-nav-dropdown" drop="left">
                <NavDropdown.Header>Conta de Usuário</NavDropdown.Header>
                <NavDropdown.Item href="#" onClick={() => this.logout()}>Sair</NavDropdown.Item>
            </NavDropdown>

            if (myUtil.isAdm() === true) {
                myNav = <Nav className="mr-auto">
                    <Nav.Link href="/admin">Início</Nav.Link> 
                <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
            </Nav>
            } else {


                myNav = <Nav className="mr-auto">
                    <Nav.Link href="/home">Início</Nav.Link> 
                            <Nav.Link href="/lista">Minha Lista</Nav.Link>
                        </Nav>

            }

        } else {
            myNavDropDown = <NavDropdown title="Acesso" id="basic-nav-dropdown" drop="left">
                <NavDropdown.Header>Conta de Usuário</NavDropdown.Header>
                <NavDropdown.Item href="/Login">Fazer Login</NavDropdown.Item>
                <NavDropdown.Item href="/cadastro">Criar Conta</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Esqueci minha senha</NavDropdown.Item> */}
            </NavDropdown>

            myNav = "";
        }

        return (
            <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home">Games Lib</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {myNav}
                    <Nav>
                        {myNavDropDown}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;