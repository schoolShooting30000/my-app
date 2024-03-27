import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import kavkazImg from "../assets/kavkaz.jpg";
import murmanskImg from "../assets/murmansk.jpg";
import krymImg from "../assets/krym.jpg";


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ kavkazImg }
                        alt="kavkaz"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "darkgreen" }}>Туры по Кавказу</h3>
                        <p style={{ color: "darkgreen" }}>Кавказ - завораживающее место со своими правилами. 
                            Только посмей погладить овцу, так на тебя набросится 
                            стая местных жителей со своими криками "Нас Мага зовут!!!"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ murmanskImg }
                        alt="murmansk"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "blue" }}>Отдых в Мурманске</h3>
                        <p style={{ color: "blue" }}>Мурманск - регион особенный. Но холодно так, что до мурашек. Лето бывает раз в месяц. 
                            Зато горы вокруг и мусор с угольной пылью вас здесь затянет.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ krymImg }
                        alt="krym"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "red" }}>Отдых в Крыму</h3>
                        <p style={{ color: "red" }}>Крым - самый жаркий регион, находящийся в эпицентре событий. 
                            Местные звуки бомбёжек и прилёта истребителей вам точно понравятся.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}