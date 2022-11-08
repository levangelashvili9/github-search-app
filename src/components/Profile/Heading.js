import React from "react";
import styled from "styled-components";

function Heading({ user }) {
  // const formattedDate = new Date(user.created_at).toDateString().slice(4);

  let date = new Date(user.created_at);
  let month = date.toLocaleString("default", { month: "short" });
  let formattedDate = `${date.getDate()} ${month} ${date.getFullYear()} `;

  return (
    <Container>
      <Img src={user.avatar_url} alt="profile pic" />
      <HeadingInfo>
        <HelperDiv>
          <Name>{user.name}</Name>
          <JoinDate>Joined {formattedDate}</JoinDate>
        </HelperDiv>
        <Link href={`https://github.com/${user.login}`}>@{user.login}</Link>
      </HeadingInfo>
    </Container>
  );
}

export default Heading;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    align-items: flex-start;
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
`;

const HeadingInfo = styled.div`
  margin-left: 19px;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media screen and (min-width: 768px) {
    margin-left: 41px;
  }

  @media screen and (min-width: 1440px) {
    flex-grow: 1;
    margin-left: 37px;
  }
`;

const Name = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  order: 1;

  color: ${(props) => props.theme.nameColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 39px;
  }
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-decoration: none;

  order: 2;

  color: #0079ff;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
  }
`;

const JoinDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  order: 3;

  color: ${(props) => props.theme.joinedDateColor};

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

const HelperDiv = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
