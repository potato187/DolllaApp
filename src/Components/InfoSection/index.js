import { Button, ButtonWrapper } from "Components/Styled";
import React from "react";
import {
  Column,
  SectionHeading,
  Image,
  ImageWrapper,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";

function InfoSection({
  id,
  lightBackground,
  imgStart,
  heading,
  subtitle,
  lightText,
  description,
  darkText,
  buttonLabel,
  path,
  primary,
  dark,
  src,
  alt,
}) {
  const isTrue = (check) => (check ? 1 : 0);

  return (
    <>
      <InfoContainer lightBackground={lightBackground} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column column="1">
              <TextWrapper>
                <TopLine children={heading} />
                <SectionHeading lightText={lightText} children={subtitle} />
                <Subtitle darkText={darkText} children={description} />
                <ButtonWrapper>
                  <Button
                    /*smooth={true}
                    duration={500}
                    spy="true"
                    offset={-80} 
                    dark2={isTrue(dark2)}
                    */
                    primary={isTrue(primary)}
                    dark={isTrue(dark)}
                    to={path}
                    children={buttonLabel}
                  />
                </ButtonWrapper>
              </TextWrapper>
            </Column>
            <Column column="2">
              <ImageWrapper>
                <Image src={src} alt={alt} />
              </ImageWrapper>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
