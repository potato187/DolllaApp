import { Button, ButtonWrapper, Container, Heading } from "Components/Styled";
import styled from "styled-components";

export const HeroContainer = styled.section`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background-color: #232a34;
`;

export const HeroContent = styled(Container)`
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 1.4;
  z-index: 3;
`;

export const HeroDescription = styled.p`
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  width: 100%;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 18px;
  }
`;

export const HeroHeading = Heading;
export const HeroSignUp = ButtonWrapper;
export const HeroButtonSignUp = Button;
