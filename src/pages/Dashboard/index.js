import React, { useState } from "react";

import {
  Container,
  MenuBar,
  Content,
  Avatar,
  Name,
  MenuItem,
  HomeIcon,
  AwardIcon,
  ExitIcon,
  HeaderContent,
  Title,
  LogoCoren,
} from "./styles";
import HomePageDashboard from "../HomePageDashboard";
import { getAllLivesData } from "../../services/firestore";
import logoCoren from "../../assets/images/logoCoren.png";
import { useLocation } from "react-router-dom";
import { auth } from "../../services/auth";
import Certificates from "../Certificates";

export default function Dashboard({ userData }) {
  const { state } = useLocation();
  const [menuSelected, setMenuSelected] = useState("home");
  const [liveList, setLiveList] = useState([]);

  React.useEffect(() => {
    getAllLivesData()
      .then((list) => {
        setLiveList(list);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <MenuBar>
        <Avatar src={auth.currentUser.photoURL} />
        <Name>{auth.currentUser.displayName}</Name>
        <MenuItem
          onClick={() => setMenuSelected("home")}
          selected={menuSelected == "home" && true}
        >
          <HomeIcon />
          <text>Página inicial</text>
        </MenuItem>
        <MenuItem
          onClick={() => setMenuSelected("certificate")}
          selected={menuSelected == "certificate" && true}
        >
          <AwardIcon />
          <text>Certificado</text>
        </MenuItem>
        <MenuItem logout={true}>
          <ExitIcon />
          <text>Sair</text>
        </MenuItem>
      </MenuBar>
      <Content>
        <HeaderContent>
          <Title>
            {menuSelected == "home" ? "Página Inicial" : "Certificados"}
          </Title>
          <LogoCoren src={logoCoren} />
        </HeaderContent>
        {menuSelected == "home" ? (
          <HomePageDashboard liveList={liveList} completed={state.completed} />
        ) : (
          <Certificates />
        )}
      </Content>
    </Container>
  );
}
