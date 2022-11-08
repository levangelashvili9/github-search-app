import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F2F2F2",
  fontColor: "#4B6A9B",
  containerColor: "#FEFEFE",
  headingColor: "#222731",
  togglerColor: "#4B6A9B",
  togglerColorHover: "#222731",
  joinedDateColor: "#697C9A",
  nameColor: "#2B3442",

  boxShadow: "rgba(70, 96, 187, 0.198567)",
};

export const darkTheme = {
  body: "#141D2F",
  fontColor: "#fff",
  containerColor: "#1E2A47",
  headingColor: "#fff",
  togglerColor: "#fff",
  togglerColorHover: "#90A4D4",
  joinedDateColor: "#fff",
  nameColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${(props) => props.theme.body}
  }

`;
