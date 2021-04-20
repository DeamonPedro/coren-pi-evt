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
import Certificates from "../Certificates";
import logoCoren from "../../assets/images/logoCoren.png";

export default function Dashboard() {
  const [menuSelected, setMenuSelected] = useState("home");
  return (
    <Container>
      <MenuBar>
        <Avatar src="https://conteudo.imguol.com.br/c/parceiros/90/2020/03/03/virus-mascara-mulher-1583271861981_v2_450x450.jpg" />
        <Name>Antônia Marielle Silva</Name>
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
        {menuSelected == "home" ? <HomePageDashboard /> : <Certificates />}
      </Content>
    </Container>
  );
}
