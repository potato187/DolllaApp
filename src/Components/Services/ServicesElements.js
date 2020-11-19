import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;

  @media screen and (max-width: 767px) {
    height: 1100px;
  }

  @media screen and (max-width: 479px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesHeading = styled.h1`
  font-size: 25px;
  color: #fff;
  margin-bottom: 64px;
  text-transform: uppercase;
  @media screen and (max-width: 479px) {
    font-size: 20px;
  }
`;
