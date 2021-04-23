import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px 0 50px;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  margin-top: 30px;
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
