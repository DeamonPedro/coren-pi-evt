import styled, { css } from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export const Container = styled.div`
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  background-color: #fcfcfc;
  h1 {
    font-weight: bold;
    font-size: 2.8rem;
    color: #43454f;
  }
`;

export const DayContainer = styled.div`
  div.day {
    width: 100%;
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
