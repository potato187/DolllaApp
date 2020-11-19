import React, { useState } from "react";
import {
  HeroButtonSignUp,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroHeading,
  HeroSignUp,
  HeroVideo,
  VideoWrapper,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <VideoWrapper>
          <HeroVideo
            playsInline
            autoPlay
            muted
            loop
            type="video/mp4"
            poster="/images/hero.jpg"
            /*      src="/videos/hero.mp4" */
          />
        </VideoWrapper>
        <HeroContent>
          <HeroHeading lightText="true"> Virtual Banking Make Easy</HeroHeading>
          <HeroDescription>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroDescription>
          <HeroSignUp>
            <HeroButtonSignUp
              to="/home"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              dark={0}
              primary={1}
              large={1}
              children="sign up"
            />
          </HeroSignUp>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
