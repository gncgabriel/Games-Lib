import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class NavigationBar extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Games Lib</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#link">Jogos</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Acesso" id="basic-nav-dropdown" drop="left">
                            <NavDropdown.Header>Conta de Usuário</NavDropdown.Header>
                            <NavDropdown.Item href="/Login">Fazer Login</NavDropdown.Item>
                            <NavDropdown.Item href="/cadastro">Criar Conta</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Esqueci minha senha</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;