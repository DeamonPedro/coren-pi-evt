import React, { useState } from "react";
import {
  Container,
  Content,
  Header,
  LogoCoren,
  Button,
  SubscribeCard,
  Options,
  AboutTab,
  ParticipantsTab,
  LogoSemanaEnf,
  Footer,
  ParticipantsContent,
  ParticipantsItem,
  NurseBackground,
  ButtonCarrouselBack,
  ButtonCarrouselNext,
  Carousel,
  ArrowBackIcon,
  LeftContainer,
  RightContainer,
  FooterContent,
  ButtonIcon,
  SocialNetwork,
} from "./styles";
import { Link } from "react-router-dom";
import logoCoren from "../../assets/images/logoCoren.png";
import participant1 from "../../assets/images/participants/participant1.svg";
import participant2 from "../../assets/images/participants/participant2.svg";
import participant3 from "../../assets/images/participants/participant3.svg";
import participant4 from "../../assets/images/participants/participant4.svg";
import participant5 from "../../assets/images/participants/participant5.svg";
import participant6 from "../../assets/images/participants/participant6.svg";
import participant7 from "../../assets/images/participants/participant7.svg";
import participant8 from "../../assets/images/participants/participant8.svg";
import participant9 from "../../assets/images/participants/participant9.svg";
import logoSemanaEnf from "../../assets/images/logoSemanaEnf.svg";
import nurseBackground from "../../assets/images/nurseBackground.svg";
import { Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useWindowDimensions } from "../../services/utils";
export default function Home() {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <NurseBackground src={nurseBackground} />
      <Content>
        <Header>
          <LogoCoren src={logoCoren} />
          <Link to="/dashboard">
            <Button>ENTRAR</Button>
          </Link>
        </Header>
        <SubscribeCard>
          <h1>Inscreva-se Já!</h1>
          <span>
            Nesta semana disponibilizamos um curso gratuito para você
            enfermeiro, inscreva-se ja!
          </span>
          <Options>
            <Link to="/login">
              <Button to="/login">INSCREVER-SE</Button>
            </Link>
            {/* <Button outline={true}>PROGRAMAÇÃO</Button> */}
          </Options>
          <LogoSemanaEnf src={logoSemanaEnf} />
        </SubscribeCard>
        <AboutTab></AboutTab>
        <ParticipantsTab>
          <h1>Uma equipe profissional pra você.</h1>
          <Carousel
            naturalSlideWidth={100}
            naturalSlideHeight={width > 800 ? 140 : 145}
            totalSlides={9}
            infinite={true}
            visibleSlides={width > 800 ? 3 : 1}
            isPlaying={true}
            interval={2000}
          >
            <Slider>
              <Slide index={0}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant1} />
                </ParticipantsContent>
              </Slide>
              <Slide index={1}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant2} />
                </ParticipantsContent>
              </Slide>
              <Slide index={2}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant3} />
                </ParticipantsContent>
              </Slide>
              <Slide index={3}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant4} />
                </ParticipantsContent>
              </Slide>
              <Slide index={4}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant5} />
                </ParticipantsContent>
              </Slide>
              <Slide index={5}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant6} />
                </ParticipantsContent>
              </Slide>
              <Slide index={6}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant7} />
                </ParticipantsContent>
              </Slide>
              <Slide index={7}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant8} />
                </ParticipantsContent>
              </Slide>
              <Slide index={8}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant9} />
                </ParticipantsContent>
              </Slide>
            </Slider>
            <ButtonCarrouselBack>
              <ArrowBackIcon />
            </ButtonCarrouselBack>
            <ButtonCarrouselNext>
              <ArrowForwardIosIcon />
            </ButtonCarrouselNext>
          </Carousel>
        </ParticipantsTab>
      </Content>

      <Footer>
        <FooterContent>
          <LeftContainer>
            <LogoCoren src={logoCoren} />
            <span>
              Desenvolvido por:{" "}
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.instagram.com/keracomunicacao")
                }
              >
                Agência KERA
              </a>
            </span>
          </LeftContainer>
          <RightContainer>
            <SocialNetwork>
              <a
                onClick={() =>
                  window.open("https://www.instagram.com/corenpioficial/")
                }
              >
                <ButtonIcon>
                  <InstagramIcon className="icon" />
                </ButtonIcon>
              </a>
              <a
                onClick={() => window.open("https://www.facebook.com/corenpi")}
              >
                <ButtonIcon>
                  <FacebookIcon className="icon" />
                </ButtonIcon>
              </a>
            </SocialNetwork>

            <span>Copyright 2021 Conselho Regional de Enfermagem do Piauí</span>
          </RightContainer>
        </FooterContent>
      </Footer>
    </Container>
  );
}
