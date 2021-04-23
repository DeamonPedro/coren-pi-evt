import styled, { css } from "styled-components";
import background from "../../assets/images/background.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ButtonBack, ButtonNext, CarouselProvider } from "pure-react-carousel";
export const Container = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  margin: 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
  z-index: 2;
`;

export const NurseBackground = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 45%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 0;
`;

export const LogoCoren = styled.img``;

export const LogoSemanaEnf = styled.img`
  margin-top: 50px;
  width: 90%;
`;

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  border-style: solid;
  transition: 0.3s;
  ${(props) =>
    props.outline
      ? css`
          background-color: transparent;
          border-width: 2px;
          border-color: #044956;
          color: #044956;
          padding: 10px 32px;
        `
      : css`
          background-color: #044956;
          border: none;
          color: #fff;
          &:hover {
            background-color: #076475;
          }
        `}
`;

export const SubscribeCard = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    font-weight: bold;
    font-size: 7.8rem;
    color: #044956;
  }
  span {
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 30px;
    text-align: center;
    width: 600px;
    color: #848484;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 4.8rem;
    }
    span {
      width: 90%;
    }
  }
`;

export const Options = styled.div`
  margin-top: 25px;
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const AboutTab = styled.div``;

export const ParticipantsTab = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  margin-bottom: 100px;
  h1 {
    margin: 0 auto;
    width: 500px;
    margin-top: 90px;
    margin-bottom: 60px;
    font-weight: bold;
    font-size: 4.8rem;
    line-height: 65px;
    text-align: center;
    color: #044956;
  }
  @media (max-width: 800px) {
    padding: 0;
    h1 {
      margin-top: 40px;
      font-size: 3rem;
      line-height: 6rem;
      margin-bottom: 30px;
      width: 100%;
    }
  }
`;

export const ParticipantsContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ParticipantsItem = styled.img``;

export const ButtonCarrouselBack = styled(ButtonBack)`
  && {
    border: none;
    width: 40px;
    border-radius: 100px;
    height: 40px;
    position: absolute;
    top: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #044956;
    background-color: #fff;
    box-shadow: -1px -1px 21px 5px rgba(171, 171, 171, 0.4);
    -webkit-box-shadow: -1px -1px 21px 5px rgba(171, 171, 171, 0.4);
    -moz-box-shadow: -1px -1px 21px 5px rgba(171, 171, 171, 0.4);
  }
`;
export const ButtonCarrouselNext = styled(ButtonNext)`
  && {
    border: none;
    width: 40px;
    border-radius: 100px;
    height: 40px;
    position: absolute;
    top: 45%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #044956;
    background-color: #fff;
    box-shadow: -1px -1px 21px 5px rgba(171, 171, 171, 0.4);
    -webkit-box-shadow: -1px -1px 21px 5px rgba(171, 171, 171, 0.4);
    -moz-box-shadow: -1px -1px 21px 5px rgba(171, 171, 171, 0.4);
  }
`;

export const Carousel = styled(CarouselProvider)`
  && {
    position: relative;
    height: auto;
  }
`;
export const ArrowBackIcon = styled(ArrowBackIosIcon)`
  && {
    margin-left: 3px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  @media (max-width: 800px) {
    height: 180px;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 20px 20px;
  display: flex;
  height: 110px;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  img {
    width: 130px;
    margin-bottom: 5px;
  }
  span {
    font-weight: normal;
    font-size: 1.4rem;
    color: #5f5f5f;
    a {
      color: #044956;
    }
  }
`;

export const RightContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    align-items: flex-start;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  span {
    font-weight: normal;
    font-size: 1.4rem;
    color: #5f5f5f;
  }
`;

export const ButtonIcon = styled.button`
  margin: 0 5px;
  background-color: #044956;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.3s;
  @media (max-width: 800px) {
    margin: 0;
    margin-bottom: 5px;
    margin-right: 10px;
  }
  &:hover {
    background-color: #076475;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 2.5rem;
  }
`;

export const SocialNetwork = styled.div`
  display: flex;
`;
