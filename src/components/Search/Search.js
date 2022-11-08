import React from "react";
import styled from "styled-components";
import SearchSVG from "../../assets/icon-search.svg";

function Search({ fetchData, setUserInput, isError }) {
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search GitHub username…"
        onChange={onChangeHandler}
      ></Input>
      <Img src={SearchSVG} />
      {isError ? <ErrorMsg>No results</ErrorMsg> : null}
      <Button onClick={fetchData}>Search</Button>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  width: 327px;
  position: relative;

  margin-bottom: 16px;

  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 573px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 730px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 60px;

  padding-left: 45px;
  padding-right: 180px;

  background: ${(props) => props.theme.containerColor};

  box-shadow: ${(props) =>
    props.theme.boxShadow
      ? `0px 16px 30px -10px ${props.theme.boxShadow}`
      : "none"};
  border-radius: 15px;
  border: none;

  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  color: ${(props) => props.theme.fontColor};

  ::placeholder {
    color: ${(props) => props.theme.fontColor};
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    height: 69px;

    font-size: 18px;
    padding-left: 80px;
    padding-right: 250px;
  }
`;

const Img = styled.img`
  position: absolute;
  left: 16px;

  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    left: 32px;

    width: 24px;
    height: 24px;
  }
`;

const ErrorMsg = styled.span`
  position: absolute;
  right: 100px;

  font-weight: 700;
  font-size: 11px;
  line-height: 19px;

  color: #f74646;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    right: 140px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 7px;

  background: #0079ff;
  border-radius: 10px;
  border: none;

  width: 84px;
  height: 46px;

  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;

  cursor: pointer;

  &:hover {
    background: #60abff;
  }

  @media screen and (min-width: 768px) {
    width: 106px;
    height: 50px;
    right: 10px;

    font-size: 16px;
    line-height: 24px;
  }
`;
