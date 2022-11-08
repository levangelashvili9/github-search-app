import React from "react";
import styled from "styled-components";

function Body({ user }) {
  return (
    <Container>
      <Bio>{user.bio}</Bio>
      <Followers>
        <Info>
          <Title>Repos</Title>
          <Value>{user.public_repos}</Value>
        </Info>
        <Info>
          <Title>Followers</Title>
          <Value>{user.followers}</Value>
        </Info>
        <Info>
          <Title>Following</Title>
          <Value>{user.following}</Value>
        </Info>
      </Followers>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 37px;
  }
`;

const Bio = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;

  margin-bottom: 23px;

  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 25px;

    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: -35px;
    margin-left: 154px;
  }
`;

const Followers = styled.div`
  background: ${(props) => props.theme.body};
  border-radius: 10px;

  display: flex;
  justify-content: space-around;

  padding: 18px 14px;

  @media screen and (min-width: 1440px) {
    margin-left: 154px;
    padding: 14px 14px;
  }
`;

const Info = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;

  margin-bottom: 8px;

  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 19px;
  }
`;

const Value = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  text-transform: uppercase;

  color: ${(props) => props.theme.nameColor};

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 33px;
  }
`;
