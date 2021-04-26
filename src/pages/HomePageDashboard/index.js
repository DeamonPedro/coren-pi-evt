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
  Button,
  StatusClassMobile,
} from "./styles";
import ProgressBar from "../../components/ProgressBar";
import { registerPresence } from "../../services/firestore";
import { auth } from "../../services/auth";
import { useWindowDimensions } from "../../services/utils";

const ClassInformation = ({ liveData, onClick, checked }) => {
  const { title, description, duration, startOn, speakers } = liveData;
  const date = startOn.toDate().toLocaleString().split(" ")[0];
  const hour = startOn.toDate().toLocaleString().split(" ")[1].substring(0, 5);
  const { width, height } = useWindowDimensions();
  const playDisabled =
    startOn.toDate().getTime() >= Date.now() ||
    new Date("05-21-2021") <= Date.now();
  return (
    <ContainerClassInformation>
      {width > 800 ? (
        <ButtonPLayClass
          playDisabled={playDisabled}
          className="ButtonPLayClass"
          title={playDisabled && "Aula indisponível"}
          onClick={!playDisabled && onClick}
        >
          <PlayIcon />
        </ButtonPLayClass>
      ) : (
        <StatusClassMobile>
          <span>Status: </span>
          <div>
            <span>
              {checked
                ? "Concluído"
                : playDisabled
                ? "Indisponível"
                : "Pendente"}
            </span>{" "}
            <StatusClass checked={checked} />
          </div>
        </StatusClassMobile>
      )}
      <DescriptionCLass>
        <h1>{title + " | " + description}</h1>
        {speakers.map((item) => {
          return <h3 className="speakers">{item}</h3>;
        })}
        <h3>{date}</h3>

        <h3>
          {"Horário de início: " + hour + " | Duração: " + duration + " horas"}
        </h3>
      </DescriptionCLass>
      {width > 800 ? (
        <StatusClass checked={checked} />
      ) : (
        <Button playDisabled={playDisabled} onClick={!playDisabled && onClick}>
          Acessar
        </Button>
      )}
    </ContainerClassInformation>
  );
};

export default function HomePageDashboard({ liveList, completed, refresh }) {
  const [percentage, setPercentage] = useState(0);

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
      {/* <Box style={{ backgroundColor: "#E8C824" }}>
        <div className="groupWarning">
          <div className="groupDescriptionWarning">
            <h1 className="verify">Verifique seus dados para certificação</h1>
            <h3>
              É importante que você confira seus dados para evitar problemas de
              certificação.
            </h3>
          </div>
          <Button className="warning">Conferir</Button>
        </div>
      </Box> */}
      <Box>
        <HeaderBox>
          <h1>Progresso</h1>
          <h2>{Math.round(percentage) + "%"}</h2>
        </HeaderBox>
        <ProgressBar percentage={percentage} />
      </Box>
      <Box>
        <HeaderBox>
          <h1>Aulas</h1>
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
