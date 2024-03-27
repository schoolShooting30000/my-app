import React, { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px'}}>
                <h1 className="text-center">Связь с нами</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Адрес электронной почты</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Введите пароль</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Я подтверждаю согласие политики конфиденциальности" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >Подтвердить</Button>

                </Form>
            </Container>
        )
    }
}