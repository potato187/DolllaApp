import styled from "styled-components";
import { Link as linkRoute } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 819px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 419px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  margin: 16px;
  color: #fff;
  @media screen and (max-width: 419px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(linkRoute)`
  color: #fff;
  margin: 5px 0;
  font-size: 12px;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #01bf71;
    transition: all 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1100px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 819px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(linkRoute)`
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const WebsiteRights = styled.small`
  align-items: flex-end;
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialMediaIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const SocialIcon = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;
