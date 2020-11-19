import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrapper,
  SocialIcon,
  SocialLink,
  SocialLogo,
  SocialMedia,
  SocialMediaIcons,
  SocialMediaWrapper,
  WebsiteRights,
} from "./FooterElements";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/sign-in">About us</FooterLink>
                <FooterLink to="/sign-in">Hot it works</FooterLink>
                <FooterLink to="/sign-in">Testimonials</FooterLink>
                <FooterLink to="/sign-in">Investors</FooterLink>
                <FooterLink to="/sign-in">Term of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Video</FooterLinkTitle>
                <FooterLink to="/sign-in">Submit Video</FooterLink>
                <FooterLink to="/sign-in">Ambassadors</FooterLink>
                <FooterLink to="/sign-in">Agency</FooterLink>
                <FooterLink to="/sign-in">Influencer</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/sign-in">Contact </FooterLink>
                <FooterLink to="/sign-in">Support</FooterLink>
                <FooterLink to="/sign-in">Destinations</FooterLink>
                <FooterLink to="/sign-in">Sponsorships</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/sign-in">Instagram</FooterLink>
                <FooterLink to="/sign-in">Facebook</FooterLink>
                <FooterLink to="/sign-in">Youtube</FooterLink>
                <FooterLink to="/sign-in">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to="/home">dolla</SocialLogo>
              <WebsiteRights>
                dolla ©️ {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              <SocialMediaIcons>
                <SocialLink href="/" target="_blank" arial-label="Facebook">
                  <SocialIcon src="/images/facebook.svg" alt="Facebook" />
                </SocialLink>
                <SocialLink href="/" target="_blank" arial-label="Instagram">
                  <SocialIcon src="/images/instagram.svg" alt="Instagram" />
                </SocialLink>
                <SocialLink href="/" target="_blank" arial-label="Youtube">
                  <SocialIcon src="/images/youtube.svg" alt="Youtube" />
                </SocialLink>
                <SocialLink href="/" target="_blank" arial-label="Twitter">
                  <SocialIcon src="/images/twitter.svg" alt="Twitter" />
                </SocialLink>
                <SocialLink href="/" target="_blank" arial-label="Linkedin">
                  <SocialIcon src="/images/linkedin.svg" alt="Linkedin" />
                </SocialLink>
              </SocialMediaIcons>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}

export default Footer;
