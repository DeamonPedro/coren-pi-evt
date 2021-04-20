import React, { useState } from "react";

import {
  Container,
  Box,
  HeaderBox,
  ContainerClassInformation,
  ButtonPLayClass,
  DescriptionCLass,
  StatusClass,
  PlayIcon,
  Divider,
} from "./styles";
import ProgressBar from "../../components/ProgressBar";

const ClassInformation = ({ playDisabled, onClick, checked }) => {
  return (
    <ContainerClassInformation playDisabled={playDisabled}>
      <ButtonPLayClass
        className="ButtonPLayClass"
        onClick={() => onClick}
        title={playDisabled && "Aula indisponível"}
      >
        <PlayIcon />
      </ButtonPLayClass>
      <DescriptionCLass>
        <h1>Aula 1 | Título da aula</h1>
        <h3>19/04/2021</h3>
        <h3>Horário de início: 8h</h3>
      </DescriptionCLass>
      <StatusClass checked={checked} />
    </ContainerClassInformation>
  );
};

export default function HomePageDashboard() {
  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Progresso</h1>
          <h2>30%</h2>
        </HeaderBox>
        <ProgressBar percentage={30} />
      </Box>
      <Box>
        <HeaderBox>
          <h1>Presença</h1>
        </HeaderBox>
        <ClassInformation playDisabled={false} checked={false} />
        <Divider />
        <ClassInformation playDisabled={true} checked={false} />
      </Box>
    </Container>
  );
}
