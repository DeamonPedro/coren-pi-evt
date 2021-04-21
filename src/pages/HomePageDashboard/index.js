import React, { useEffect, useState } from "react";

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

const ClassInformation = ({ liveData, onClick, checked }) => {
  const { title, description, duration, startOn, speakers } = liveData;
  const date = startOn.toDate().toLocaleString().split(" ")[0];
  const hour = startOn.toDate().toLocaleString().split(" ")[1].substring(0, 5);
  const playDisabled = startOn.toDate().getTime() >= Date.now();

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
        <h1>{title + " | " + description}</h1>
        <h3>{date}</h3>
        <h3>
          {"Horário de início: " + hour + " | Duração: " + duration + " horas"}
        </h3>
      </DescriptionCLass>
      <StatusClass checked={checked} />
    </ContainerClassInformation>
  );
};

export default function HomePageDashboard({ liveList, completed }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (liveList && completed) {
      setPercentage(completed.length * (100 / liveList.length));
    }
  }, [liveList, completed]);

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Progresso</h1>
          <h2>{percentage}%</h2>
        </HeaderBox>
        <ProgressBar percentage={percentage} />
      </Box>
      <Box>
        <HeaderBox>
          <h1>Presença</h1>
        </HeaderBox>
        {liveList.map((live, index) => {
          console.log(live);
          return (
            <>
              <ClassInformation
                liveData={live}
                playDisabled={false}
                checked={false}
              />
              {index + 1 != liveList.length && <Divider />}
            </>
          );
        })}
      </Box>
    </Container>
  );
}
