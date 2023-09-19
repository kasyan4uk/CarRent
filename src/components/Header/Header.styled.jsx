import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  height: 80px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1818ad57;
  background-color: #F7F7F7;
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const LogoText = styled.p`
    color: black;
    margin-left: 30px;
    font-size: 26px;
    font-family: 'Shrikhand', cursive;
`;

export const LogoIcon = styled.img`
    max-width: 30px;
`;

export const Navigation = styled.div`
    display: flex;
    gap: 100px;
`;

export const PageNav = styled(NavLink)`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    color: #6C6C6C;
    &:hover {
        text-shadow: 0px 0px 1px #6C6C6C;
    };
    &.active {
        color: #3d3d3d;
        
    };
    
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 30px;
`;

export const SocialLink = styled(Link)`

`;

export const SocialIcon = styled.img`
    
`;


