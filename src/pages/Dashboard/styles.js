import styled, { css } from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
export const Container = styled.div`
  background-color: #f7f8fc;
  margin: 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
`;

export const MenuBar = styled.div`
  background-color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 25px;
  justify-content: flex-start;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin-bottom: 10px;
`;
export const Name = styled.text`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 20px;
`;
export const MenuItem = styled.button`
  border: none;
  cursor: pointer;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  display: flex;
  transition: 0.3s;
  ${(props) =>
    props.logout
      ? css`
          color: #ff4b4b;
        `
      : css`
          color: #959292;
        `};
  ${(props) =>
    props.selected
      ? css`
          background-color: #b8e6ff;
          color: #007cc1;
        `
      : css`
          background-color: transparent;
          &:hover {
            background-color: #e3f3fc;
          }
        `}

  text {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const HomeIcon = styled(HomeOutlinedIcon)`
  && {
    font-size: 18px;
  }
`;

export const AwardIcon = styled(CardMembershipIcon)`
  && {
    font-size: 18px;
  }
`;

export const ExitIcon = styled(ExitToAppTwoToneIcon)`
  && {
    font-size: 18px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 50px 0px 50px;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  color: #43454f;
`;
export const LogoCoren = styled.img``;
