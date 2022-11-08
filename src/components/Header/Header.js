import React, { useState } from "react";
import styled from "styled-components";
import MoonSVG from "../../assets/MoonSVG";
import SunSVG from "../../assets/SunSVG";

function Header({ theme, setTheme, themeToggler }) {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Container>
      <Heading>devfinder</Heading>
      <ToggleTheme
        onClick={themeToggler}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ToggleThemeText hovered={hovered}>
          {theme === "light" ? "DARK" : "LIGHT"}
        </ToggleThemeText>
        {theme === "light" ? (
          <MoonSVG hovered={hovered} />
        ) : (
          <SunSVG hovered={hovered} />
        )}
      </ToggleTheme>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 327px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 36px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    width: 573px;
  }

  @media screen and (min-width: 1440px) {
    width: 730px;
  }
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.headingColor};
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
`;

const ToggleTheme = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const ToggleThemeText = styled.span`
  color: ${(props) =>
    props.hovered ? props.theme.togglerColorHover : props.theme.togglerColor};
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  margin-right: 16px;
`;
