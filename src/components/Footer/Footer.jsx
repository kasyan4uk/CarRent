import { Author, Container, Logo } from "./Footer.styled";

import LogoIcon from "/Logo.png"

function Footer() {
    return (
        <Container>
            <Logo src={LogoIcon} alt="Logo"/>
            <Author 
            to="https://www.linkedin.com/in/serhii-kasianchuk/" 
            target="_blank" 
            rel="noopener noreferrer"
            > 
            Serhii Kasianchuk
            </Author>
        </Container>
    )
}

export default Footer;