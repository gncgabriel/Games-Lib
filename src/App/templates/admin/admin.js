import React, { Component } from 'react';
import NavigationBar from '../components/navbar';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { util } from '../../services/util';
import {adminService} from '../../services/admin/admin';

import * as Ladda from 'ladda';


class Admin extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            category: "",
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

    loadImage(evt) {

        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");

        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            //fr.onload = () => showImage(fr);
            fr.onload = () => showImage(fr, this);
            fr.readAsDataURL(files[0]);
           
     
        }


        function showImage(fileReader, c) {
            var img = document.getElementById("img_preview");
            ctx.drawImage(img, 0, 0);
            img.onload = ctx.getImageData(0, 0, img.width, img.height).data;
            img.src = fileReader.result;
        
        }


    }

    salvar(){
       

        var img = document.getElementById("img_preview");
        var data = {name: this.state.name, category: this.state.category, image: img.src}
        var service = new adminService().cadastroGames(data);

        service.then(res=>{
            if(res.status === 201){
                alert('Jogo salvo com sucesso')
                window.location.reload();
            }else{
                alert('Erro ao cadastrar Jogo')
            }
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
                        <Col lg={12} className="mt-4">
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col lg={5} sm={12} className="">

                                    <Form>
                                        <Col lg={12}>
                                            <h4>Fomulário de Jogo</h4>
                                        </Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control type="text" value={this.state.name}  onChange={e => this.setState({ name: e.target.value })} placeholder="Digite o nome do jogo" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Categoria</Form.Label>
                                            <Form.Control type="text" value={this.state.category}  onChange={e => this.setState({ category: e.target.value })} placeholder="Digite a categoria do Jogo" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Imagem</Form.Label>
                                            <Form.Control type="file" placeholder="imagem" onChange={e => this.loadImage(e)} />
                                        </Form.Group>
                                        <div>
                                            <img id="img_preview" className="img_preview"/>
                                            
                                        </div>
                                        <Button className="ladda-btn" data-style="zoom-in" variant="primary" type="Button" onClick={() => this.salvar()}  >
                                            Salvar
                                        </Button>
                                    </Form>
                                </Col>
                                <div className="linha_divisora"></div>
                                <Col lg={5} sm={12} className="text-center">
                                    
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