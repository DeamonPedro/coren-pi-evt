import styled, { css } from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export const Container = styled.div`
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #fcfcfc;
  @media (max-width: 800px) {
    padding: 0;
    background-color: #fff;
  }
`;
