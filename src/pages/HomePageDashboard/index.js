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
import { registerPresence } from "../../services/firestore";
import { auth } from "../../services/auth";

const ClassInformation = ({ liveData, onClick, checked }) => {
  const { title, description, duration, startOn, speakers } = liveData;
  const date = startOn.toDate().toLocaleString().split(" ")[0];
  const hour = startOn.toDate().toLocaleString().split(" ")[1].substring(0, 5);
  const playDisabled = false; //startOn.toDate().getTime() >= Date.now();

  return (
    <ContainerClassInformation playDisabled={playDisabled}>
      <ButtonPLayClass
        className="ButtonPLayClass"
        onClick={onClick}
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

export default function HomePageDashboard({ liveList, completed, refresh }) {
  const [percentage, setPercentage] = useState(0);

  console.log(completed);

  const playLiveVideo = (checked, live) => {
    window.open(live.url, "_blank").focus();
    if (!checked) {
      registerPresence(auth.currentUser.uid, live.id).then(() => {
        refresh();
      });
    }
  };

  useEffect(() => {
    if (liveList.length && completed.length) {
      setPercentage(completed.length * (100 / liveList.length));
    }
  }, [liveList, completed]);

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Progresso</h1>
          <h2>{Math.round(percentage) + "%"}</h2>
        </HeaderBox>
        <ProgressBar percentage={percentage} />
      </Box>
      <Box>
        <HeaderBox>
          <h1>Presença</h1>
        </HeaderBox>
        {liveList.map((live, index) => {
          const checked = completed.includes(live.id);
          return (
            <>
              <ClassInformation
                liveData={live}
                onClick={() => playLiveVideo(checked, live)}
                checked={checked}
              />
              {index + 1 != liveList.length && <Divider />}
            </>
          );
        })}
      </Box>
    </Container>
  );
}
