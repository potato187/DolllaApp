import { Link as linkRoute } from "react-router-dom";
import { Link as linkScroll } from "react-scroll";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(linkRoute)`
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  padding: ${({ large }) => (large ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ large }) => (large ? "20px" : "16px")};
  transition: all 0.3s ease-in-out;

  :hover {
    transition: all 0.3 ease-in-out;
    background-color: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    color: ${({ primary }) => (primary ? "#01bf71" : "#fff")};
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media only screen and (max-width: 767px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 32px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

export const LinkScroll = styled(linkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const LinkRoute = styled(linkRoute)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
  }
`;

export const CardIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const CardHeading = styled.h2`
  text-transform: uppercase;
  font-size: 10px;
  margin-bottom: 10px;
`;

export const CardDesc = styled.p`
  font-size: 10px;
  text-align: center;
`;
