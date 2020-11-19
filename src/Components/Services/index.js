import React from "react";
import {
  ServicesContainer,
  ServicesHeading,
  ServicesWrapper,
} from "./ServicesElements";
import { Card, CardHeading, CardIcon, CardDesc } from "Components/Styled";

function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesHeading>our services</ServicesHeading>
        <ServicesWrapper>
          <Card>
            <CardIcon src="/images/svg-1.svg" />
            <CardHeading>reduce expenses</CardHeading>
            <CardDesc>
              We help reduce your fess and increase your overall revenue.
            </CardDesc>
          </Card>
          <Card>
            <CardIcon src="/images/svg-2.svg" />
            <CardHeading>Virtual offices</CardHeading>
            <CardDesc>
              You can access our platform online anywhere in the world.
            </CardDesc>
          </Card>
          <Card>
            <CardIcon src="/images/svg-3.svg" />
            <CardHeading>Premium Benefits</CardHeading>
            <CardDesc>
              UnClock our special membership card that return 5% cash back.
            </CardDesc>
          </Card>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
