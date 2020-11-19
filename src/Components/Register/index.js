import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  Icon,
  Text,
} from "./RegisterElements";

function Register() {
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/home">Dolla</Icon>
          <FormContent>
            <Form action="#" autoComplete="false">
              <FormHeading>Sign in to your account</FormHeading>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  );
}

export default Register;
