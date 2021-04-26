import styled, { css } from "styled-components";

import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    padding: 30px;
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
  h3.warningDescription {
    color: #fff;
    font-size: 1.8rem;
    font-weight: normal;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  h1.verify {
    color: #1b1705;
    font-weight: bold;
    font-size: 2.6rem;
    margin-bottom: 10px;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  .groupDescriptionWarning {
  }
  .warning {
    background-color: #fff;
    color: #e8c824;
    &:hover {
      background-color: #e5e5e5;
    }
  }
  .groupWarning {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
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

export const ContainerClassInformation = styled.div`
  display: grid;
  grid-template-columns: 60px auto 35px;
  align-content: center;
  align-items: center;
  grid-gap: 10px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
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
  &:hover {
    background-color: ${(props) => !props.playDisabled && "#ff4b4b"};
  }
  ${(props) =>
    props.playDisabled
      ? css`
          background-color: #e5e5e5;
        `
      : css`
          cursor: pointer;
          background-color: #044956;
        `};
`;
export const PlayIcon = styled(PlayArrowRoundedIcon)`
  && {
    font-size: 3.8rem;
    color: #fff;
  }
`;
export const DescriptionCLass = styled.div`
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
`;
export const StatusClass = styled(CheckCircleRoundedIcon)`
  && {
    font-size: 4rem;
    color: ${(props) => (props.checked ? "#34a853" : "#E5E5E5")};
    @media (max-width: 800px) {
      font-size: 3rem;
      margin-left: 10px;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  height: 1px;
  margin: 15px 0 15px 0;
`;

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  border: none;
  margin-top: 10px;
  color: #fff;

  @media (max-width: 800px) {
    width: 100%;
  }
  ${(props) =>
    props.playDisabled
      ? css`
          background-color: #e5e5e5;
        `
      : css`
          cursor: pointer;
          background-color: #044956;
          &:hover {
            background-color: #076475;
          }
        `};
`;

export const StatusClassMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.8rem;
    color: #43454f;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
