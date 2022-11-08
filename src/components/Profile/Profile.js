import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";

function Profile({ user }) {
  return (
    <Container>
      <Heading user={user} />
      <Body user={user} />
      <Footer user={user} />
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  width: 327px;

  background: ${(props) => props.theme.containerColor};
  box-shadow: ${(props) =>
    props.theme.boxShadow
      ? `0px 16px 30px -10px ${props.theme.boxShadow}`
      : "none"};
  border-radius: 15px;

  padding: 32px 24px 48px;

  @media screen and (min-width: 768px) {
    width: 573px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 730px;
    padding: 48px;
  }
`;
