import styled, { css } from "styled-components";

import SearchIcon from "@material-ui/icons/Search";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px 0 50px;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  margin-top: 30px;
  position: relative;
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: #43454f;
    font-weight: 300;
    font-size: 26px;
  }
  h2 {
    color: #43454f;
    font-size: 20px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: #f5f5f5;
  border: none;
  padding: 0 30px;
  color: #959292;
  font-size: 1.6rem;
`;

export const ContainerAnalytics = styled.div`
  padding: 20px 50px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 150px 150px;
  grid-gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
  div {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    h3 {
      color: #43454f;
      font-size: 1.8rem;
    }
    h1 {
      color: #044956;
      font-size: 6rem;
    }
  }
  .occupation {
    background-color: #044956;
    h3 {
      color: #75b2bd;
      font-size: 1.8rem;
    }
    h1 {
      color: #fff;
      font-size: 6rem;
    }
  }
`;

export const ContentUser = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 150px;
  img {
    width: 80px;
    height: 80px;
    border: none;
    appearance: none;
    border-radius: 100px;
  }
  .information {
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      color: #044956;
      font-weight: 300;
      font-size: 2rem;
      @media (max-width: 800px) {
        margin-bottom: 5px;
      }
    }
    span {
      font-size: 1.4rem;
      color: #959292;
      font-weight: 300;
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 170px;
  right: 35px;
  appearance: none;
  border: none;
  background-color: transparent;
`;
