import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotLoadedBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e8e8e8;
  border-radius: 100px;
`;

export const LoadedBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  transition: 0.5s;
  background-color: #044956;
  border-radius: 100px;
`;
