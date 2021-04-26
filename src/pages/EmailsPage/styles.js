import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
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
    font-size: 2.6rem;
  }
  h2 {
    color: #43454f;
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 22px;
  width: 100%;
  font-size: 2rem;

  margin-bottom: 15px;
  text-align: start;
`;

export const Message = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 22px;
  width: 100%;
  font-size: 2rem;

  margin-bottom: 5px;
  text-align: start;
  resize: none;
  font-family: "Open Sans";

  height: 300px;
`;

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  background-color: #044956;
  border: none;
  margin-top: 10px;
  font-size: 1.6rem;
  color: #fff;
  &:hover {
    background-color: #076475;
  }
`;

export const Loading = styled(CircularProgress)`
  && {
    color: #fff;
  }
`;
