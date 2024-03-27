import React, { Component } from 'react';
import { 
    Button, 
    Container, 
    Form, 
    FormControl, 
    Nav, 
    Navbar 
} from 'react-bootstrap';
import logo from './logosvt.jpg';
import '../Components/Header.css'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Routes from '../Pages/Routes';

export default function Header() {
    return (
        <>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    <img 
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block allign-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className='mr-auto navigation'>
                        <Nav.Link href="/" >Главная</Nav.Link>
                        <Nav.Link href="/about" >О нас</Nav.Link>
                        <Nav.Link href="/contacts" >Контакты</Nav.Link>
                        <Nav.Link href="/routes" >Направления</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Поиск"
                            className="mr-sm-2"
                        />
                        <Button variant='outline-info'>Поиск</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </> 
        )
}