import { 
    Container, 
    Logo, 
    LogoIcon, 
    LogoText, 
    Navigation, 
    PageNav,
    SocialIcon,
    SocialLink,
    SocialMedia
} from "./Header.styled";
import LogoPNG from "/Logo.png"
import IG from "/IG.svg"
import FB from "/FB.svg"
import YT from "/YT.svg"

function Header() {
    return (
    <Container>
        <Logo to="/">
            <LogoText>TopCars</LogoText>
            <LogoIcon src={LogoPNG} alt="TopCars"/>
        </Logo>
        <Navigation>
            <PageNav to={"/catalog"}>Catalog</PageNav>
            <PageNav to={"/favorites"}>Favorites</PageNav>
        </Navigation>
        <SocialMedia>
            <SocialLink to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={IG} alt="instagram"/>
            </SocialLink>
            <SocialLink to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={FB} alt="facebook"/>
            </SocialLink>
            <SocialLink to="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={YT} alt="youtube"/>
            </SocialLink>
        </SocialMedia>
    </Container>
    )
}

export default Header;