import React from "react";
import styled from "styled-components";
import LocationSVG from "../../assets/LocationSVG";
import WebsiteSVG from "../../assets/WebsiteSVG";
import TwitterSVG from "../../assets/TwitterSVG";
import CompanySVG from "../../assets/CompanySVG";

function Footer({ user }) {
  return (
    <Container>
      <Info order="1" available={!user.location ? true : false}>
        <LocationSVG />
        <InfoText>{user.location ? user.location : "Not Available"}</InfoText>
      </Info>
      <Info order="3" available={!user.blog ? true : false}>
        <WebsiteSVG />
        <InfoText>
          <Link href={user.blog ? user.blog : null}>
            {user.blog ? user.blog : "Not Available"}
          </Link>
        </InfoText>
      </Info>
      <Info order="2" available={!user.twitter_username ? true : false}>
        <TwitterSVG />
        <InfoText>
          {user.twitter_username ? user.twitter_username : "Not Available"}
        </InfoText>
      </Info>
      <Info order="4" available={!user.company ? true : false}>
        <CompanySVG />
        <InfoText>{user.company ? user.company : "Not Available"}</InfoText>
      </Info>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 19px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 154px;
  }
`;

const Info = styled.div`
  display: flex;
  position: relative;

  order: ${(props) => props.order};
  opacity: ${(props) => (props.available ? 0.5 : 1)};
`;

const InfoText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  color: ${(props) => props.theme.fontColor};

  margin-left: 33px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 36px;
  }
`;

const Link = styled.a`
  text-decoration: none;

  color: ${(props) => props.theme.fontColor};

  &:hover {
    text-decoration: underline;
  }
`;
