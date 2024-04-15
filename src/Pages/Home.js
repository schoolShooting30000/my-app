import React, { Component } from "react"
import CarouselBox from "../Components/CarouselBox"
import '../Pages/Home.css'
import { CardGroup, CardImg, Container, Card, CardBody, CardTitle, CardText } from "react-bootstrap"
import background from "../assets/palms.jpg"
import backgroundImage from "../assets/palms1.jpg"
import palms1Img from "../assets/palms1.jpg"

export default class Home extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${background})` }}>
                <Container className="containerImage">
                <backgroundImage 
                        className="d-block w-100"
                        src={ palms1Img }
                        alt="palms1"
                    />
                    <h2>Добро пожаловать на наше турагентство "Песок в плавках"!</h2>
                </Container>
                <CarouselBox />
                <Container className="conteiner">
                    <h2 className="text-center m-4">Наши особенности туров</h2>
                    <CardGroup style={{ width: '18rem' }} className="m-4">
                        <Card bg="success" text="light">
                            <CardImg 
                            variant="top"
                            src="https://sneg.top/uploads/posts/2023-04/1682065418_sneg-top-p-palets-vverkh-kartinka-dlya-prezentatsii-p-33.png"
                            />
                            <CardBody>
                                <CardTitle>Качество</CardTitle>
                                <CardText>
                                    Наши туры в отличии от остальных делаются без проблем и 
                                    регистрации, всего-то вам нужен только паспорт.
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardGroup>
                    <CardGroup style={{ width: '18rem' }} className="m-4">
                        <Card bg="success" text="light">
                            <CardImg 
                            variant="top"
                            src="https://i.pinimg.com/originals/bc/9e/c1/bc9ec1ce2b3b187e1c784bdf453c5f74.png"
                            />
                            <CardBody>
                                <CardTitle>Мировая доступность</CardTitle>
                                <CardText>
                                    Мы вам предлагаем туры не только по России, но и по многим странам.
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        )
    }
}
