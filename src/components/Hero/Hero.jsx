import { Container, HeroSubtitle, HeroTitle, RentButton, TitleContainer, } from "./Hero.styled";

function Hero() {
    return (
        <Container>
            <RentButton to={"/catalog"}>Rent Now</RentButton>
            <TitleContainer>
                <HeroSubtitle>Dream rental</HeroSubtitle>
                <HeroTitle>We will fulfill your needs!</HeroTitle>
            </TitleContainer>
        </Container>
    )
}

export default Hero;