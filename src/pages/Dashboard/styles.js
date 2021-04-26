import styled, { css } from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
export const Container = styled.div`
  background-color: #f7f8fc;
  margin: 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
  @media (max-width: 800px) {
    position: relative;
    display: flex;
    grid-template-columns: auto;
  }
`;

export const MenuBar = styled.div`
  background-color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 25px;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  transition: 0.3s;
  ${(props) =>
    !props.visible &&
    css`
      transform: translateX(-300px);
    `}
  @media (max-width: 800px) {
    position: absolute;
    width: 300px;
    box-shadow: 7px 1px 13px -6px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: 7px 1px 13px -6px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 7px 1px 13px -6px rgba(0, 0, 0, 0.08);
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin-bottom: 10px;
`;
export const Name = styled.text`
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 5px;
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
          font-weight: bold;
          background-color: #044956;
          color: #fff;
        `
      : css`
          background-color: transparent;
          &:hover {
            background-color: #e3f3fc;
          }
        `}

  text {
    margin-left: 10px;
    font-size: 1.4rem;
  }
  @media (max-width: 800px) {
    text {
      font-size: 1.8rem;
    }
  }
`;

export const HomeIcon = styled(HomeOutlinedIcon)`
  && {
    font-size: 1.8rem;
    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }
`;

export const AwardIcon = styled(CardMembershipIcon)`
  && {
    font-size: 1.8rem;
    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }
`;

export const ExitIcon = styled(ExitToAppTwoToneIcon)`
  && {
    font-size: 1.8rem;
    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 50px 0px 50px;
  @media (max-width: 800px) {
    padding: 30px 30px 0px 30px;
  }
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.8rem;
  color: #43454f;
`;
export const LogoCoren = styled.img`
  @media (max-width: 800px) {
    width: 120px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  height: 1px;
  margin: 15px 0 15px 0;
`;

export const TagADM = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fbbc05;
  border-radius: 50px;
  color: #fff;
  font-size: 1rrem;
  font-weight: bold;
  padding: 3px 10px;
`;
export const ContentAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

export const People = styled(PeopleAltIcon)`
  && {
    font-size: 1.8rem;
    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }
`;

export const Email = styled(MailOutlineIcon)`
  && {
    font-size: 1.8rem;
    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }
`;
