import styled, { css } from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export const Container = styled.div`
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fcfcfc;
  h1.title {
    font-weight: bold;
    font-size: 2.8rem;
    color: #43454f;
    margin-bottom: 100px;
    @media (max-width: 800px) {
      margin-bottom: 50px;
    }
  }
`;

export const DayContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  @media (max-width: 800px) {
    padding: 0 20px;
  }
  div.day {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #044956;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    color: #fff;
    font-size: 1.6rem;
    margin-right: 15px;
    @media (max-width: 800px) {
      height: 50px;
      width: 50px;
      font-size: 1.4rem;
    }
  }

  div.information {
    h1 {
      color: #044956;
      font-weight: 300;
      @media (max-width: 800px) {
        margin-bottom: 10px;
      }
    }
    h3 {
      color: #959292;
      font-weight: 300;
    }
    .speakers {
      color: #000;
    }
  }
`;
export const Divider = styled.div`
  width: 90%;
  background-color: #e8e8e8;
  height: 1px;
  margin: 15px 0 15px 0;
`;
