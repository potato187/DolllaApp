import styled from "styled-components";
import { Heading } from "Components/Styled";

export const InfoContainer = styled.div`
  color: #fff;
  background-color: ${({ lightBackground }) =>
    lightBackground ? "#f9f9f9" : "#010606"};

  @media only screen and (max-width: 767px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  height: 860px;
  margin: 0 auto;
  padding: 0 24px;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'clo2 clo1'` : `'clo1 clo2'`};

  @media screen and (max-width: 767px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'clo1' 'clo2'` : `'clo1 clo1' 'clo2 clo2'`};
  }
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: ${({ column }) => (column ? `clo${column}` : "clo1")};
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-right: -1.4px;
`;

export const SectionHeading = Heading;

export const Subtitle = styled.p`
  max-width: 440px;
  width: 100%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
