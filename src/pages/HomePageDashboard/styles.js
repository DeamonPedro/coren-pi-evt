import styled, { css } from "styled-components";

import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px 0 50px;
  margin-bottom: 50px;
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

export const ContainerClassInformation = styled.div`
  display: grid;
  grid-template-columns: 60px auto 35px;
  align-content: center;
  align-items: center;
  grid-gap: 10px;
  ${(props) =>
    !props.playDisabled &&
    css`
      cursor: pointer;
    `};
  &:hover {
    .ButtonPLayClass {
      background-color: ${(props) => !props.playDisabled && "#ff4b4b"};
    }
  }
  .ButtonPLayClass {
    ${(props) =>
      props.playDisabled
        ? css`
            background-color: #e5e5e5;
          `
        : css`
            cursor: pointer;
            background-color: #219ce1;
          `};
  }
`;
export const ButtonPLayClass = styled.div`
  border-radius: 5px;
  align-self: flex-start;

  margin: 0 auto;
  margin-top: 7px;
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
`;
export const PlayIcon = styled(PlayArrowRoundedIcon)`
  && {
    font-size: 38px;
    color: #fff;
  }
`;
export const DescriptionCLass = styled.div`
  h1 {
    color: #219ce1;
    font-weight: 300;
  }
  h3 {
    color: #959292;
    font-weight: 300;
  }
  .speakers {
    color: #000;
  }
`;
export const StatusClass = styled(CheckCircleRoundedIcon)`
  && {
    font-size: 40px;
    color: ${(props) => (props.checked ? "#34a853" : "#E5E5E5")};
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  height: 1px;
  margin: 15px 0 15px 0;
`;
