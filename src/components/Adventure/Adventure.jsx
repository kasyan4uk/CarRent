/* eslint-disable no-unused-vars */
import { AdventureCard, AdventureContainer, AdventureSubtitle, AdventureTitle, CardImg, CardInfo, CardItem, CardList, CardTitle, Container, CardContainer } from "./Adventure.styled";

import Ford from "../../img/Ford.png"
import Porsche from "../../img/Porsche.png"
import Mercedes from "../../img/Mercedes.png"
import BMW_M5 from "../../img/BMW_M5.png"
import BMW_M4 from "../../img/BMW_M4.png"
import GTR from "../../img/GTR.png"

import {AiFillCar} from "react-icons/ai"
import {PiEngineFill} from "react-icons/pi"
import {RiPaintFill} from "react-icons/ri"
import {FaRoad} from "react-icons/fa"

function Adventure() {
    return (
        <Container>
            <AdventureContainer>
                <AdventureTitle>Sports car rental</AdventureTitle>
                <AdventureSubtitle>Get to know our fleet!</AdventureSubtitle>
                <CardContainer>
                    <AdventureCard>
                        <CardTitle>Ford Mustang 2.3 EcoBoost</CardTitle>
                        <CardInfo>
                            <CardImg src={Ford}/>
                            <CardList>
                                <CardItem><AiFillCar size={16}/>Coupe</CardItem>
                                <CardItem><PiEngineFill size={16}/>2.3 EcoBoost</CardItem>
                                <CardItem><RiPaintFill size={16}/>Black or silver</CardItem>
                                <CardItem><FaRoad size={16}/>310 HP</CardItem>
                            </CardList>
                        </CardInfo>
                    </AdventureCard>
                    <AdventureCard>
                        <CardTitle>Porsche 718 Cayman</CardTitle>
                        <CardInfo>
                            <CardImg src={Porsche}/>
                            <CardList>
                                <CardItem><AiFillCar size={16}/>Coupe</CardItem>
                                <CardItem><PiEngineFill size={16}/>2.0l Turbo</CardItem>
                                <CardItem><RiPaintFill size={16}/>Yellow</CardItem>
                                <CardItem><FaRoad size={16}/>300 HP</CardItem>
                            </CardList>
                        </CardInfo>
                    </AdventureCard>
                    <AdventureCard>
                        <CardTitle>Mercedes A45 AMG</CardTitle>
                        <CardInfo>
                            <CardImg src={Mercedes}/>
                            <CardList>
                                <CardItem><AiFillCar size={16}/>Hothatch</CardItem>
                                <CardItem><PiEngineFill size={16}/>2.0l Turbo</CardItem>
                                <CardItem><RiPaintFill size={16}/>Yellow</CardItem>
                                <CardItem><FaRoad size={16}/>421 HP</CardItem>
                            </CardList>
                        </CardInfo>
                    </AdventureCard>
                    <AdventureCard>
                        <CardTitle>BMW M5 Competition</CardTitle>
                        <CardInfo>
                            <CardImg src={BMW_M5}/>
                            <CardList>
                                <CardItem><AiFillCar size={16}/>Coupe</CardItem>
                                <CardItem><PiEngineFill size={16}/>4.4 Twin Turbo</CardItem>
                                <CardItem><RiPaintFill size={16}/>Navy</CardItem>
                                <CardItem><FaRoad size={16}/>625 HP</CardItem>
                            </CardList>
                        </CardInfo>
                    </AdventureCard>
                    <AdventureCard>
                        <CardTitle>BMW M4</CardTitle>
                        <CardInfo>
                            <CardImg src={BMW_M4}/>
                            <CardList>
                                <CardItem><AiFillCar size={16}/>Coupe</CardItem>
                                <CardItem><PiEngineFill size={16}/>3.0l Twin Turbo</CardItem>
                                <CardItem><RiPaintFill size={16}/>Yellow</CardItem>
                                <CardItem><FaRoad size={16}/>450 HP</CardItem>
                            </CardList>
                        </CardInfo>
                    </AdventureCard>
                    <AdventureCard>
                        <CardTitle>Nissan GT-R</CardTitle>
                        <CardInfo>
                            <CardImg src={GTR}/>
                            <CardList>
                                <CardItem><AiFillCar size={16}/>Coupe</CardItem>
                                <CardItem><PiEngineFill size={16}/>3.8l Twin Turbo</CardItem>
                                <CardItem><RiPaintFill size={16}/>Orange</CardItem>
                                <CardItem><FaRoad size={16}/>570 HP</CardItem>
                            </CardList>
                        </CardInfo>
                    </AdventureCard>
                </CardContainer>
                
            </AdventureContainer>
        </Container>
    )
}

export default Adventure;