import React, { Component } from "react"
import { Col, Container, Row, Nav, Tab } from "react-bootstrap"

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >История</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >Команда</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img width={700} height={500} src="https://img.dmclk.ru/q80/eva_house/2c/19/2c1920f97ce54bf5b7f35b56e7c7ce337d8f3426.jpg" />
                                    <h3>Наш офис - по адресу: г. Санкт-Петербург, ул. Дыбенко, д. 20, к. 1.</h3>
                                    <p>Мы - турагентство, которое существует уже более 10 лет. 
                                        За всё наше существование у нас были самые захватывающие туры.
                                        Сначала наши туры были только по России, а теперь наши границы расширились и мы 
                                        путешествуем не только в другие страны, но и по новым территориям.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h1>Все наши специалисты - отличные профессионалы.</h1>
                                    <img width={300} height={200} src="https://avatars.dzeninfra.ru/get-zen_doc/5288931/pub_630a267e776ba478561a9d68_6310d9c0d4062f37cd86a408/scale_1200" />
                                    <h3>Михаил Павлович Терентьев</h3>
                                    <h3>Генеральный директор компании.</h3>
                                    <img width={300} height={200} src="https://narisyu.cdnbro.com/posts/2025330-sheikh-risunok-8.jpg" />
                                    <h3>Рашид Аль Муса Аль Мухаммад</h3>
                                    <h3>Менеджер компании.</h3>
                                    <img width={300} height={200} src="https://cdn.trinixy.ru/pics5/20150922/predprinimateli_90e_11.jpg" />
                                    <h3>Виталий Олегович Бойцов</h3>
                                    <h3>Специалист по работе с клиентами.</h3>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}