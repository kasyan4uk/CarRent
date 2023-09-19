import styled, { keyframes } from "styled-components";
import HeroIMG from "../../img/Hero.jpg";
import { Link } from "react-router-dom";


export const Container = styled.div`
  max-width: 1440px;
  height: 600px;
  margin: auto;
  background-image: url(${HeroIMG});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const play_top = keyframes`
    0% 
	{
		-webkit-box-shadow: 0 0 rgba(0,163,182,.6);
		-moz-box-shadow: 0 0 rgba(0,163,182,.6);
		box-shadow: 0 0 rgba(0,163,182,.6);
	}
	to 
	{
		-webkit-box-shadow: 0 0 0 20px rgba(0,163,182,0);
		-moz-box-shadow: 0 0 0 20px rgba(0,163,182,0);
		box-shadow: 0 0 0 20px rgba(0,163,182,0);
	}  
`

const play_down = keyframes`
    0% 
	{
		-webkit-box-shadow: 0 0 rgba(55,55,55,.6);
		-moz-box-shadow: 0 0 rgba(55,55,55,.6);
		box-shadow: 0 0 rgba(55,55,55,.6); 
	}
	to 
	{
		-webkit-box-shadow: 0 0 0 20px rgba(55,55,55,0);
		-moz-box-shadow: 0 0 0 20px rgba(55,55,55,0);
		box-shadow: 0 0 0 20px rgba(55,55,55,0);  
	}
`

export const RentButton = styled(Link)`
    height: 70px;
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #e6a833;
    border-radius: 5%;
    line-height: 70px;
    cursor: pointer;
    
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    
    background: rgba(41, 41, 41, 0.88);
    -webkit-animation-name: ${play_down};
    -moz-animation-name: ${play_top};
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    box-shadow: 0 0 0 3px rgba(0, 0, 0,.5);
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1440px;
    position: absolute;
    bottom: 90px;
    height: 120px;
    background: rgba(28, 28, 28, 0.76);
`;

export const HeroTitle = styled.h1`
    margin-left: 180px;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
    font-weight: 700;
`;

export const HeroSubtitle = styled.p`
    margin-left: 180px;
    color: #FF4D00;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
`;
