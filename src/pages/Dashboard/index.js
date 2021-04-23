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
  Divider,
  TagADM,
  ContentAvatar,
} from "./styles";
import HomePageDashboard from "../HomePageDashboard";
import HomePageDashboardADM from "../HomePageDashboardADM";
import { getAllLivesData } from "../../services/firestore";
import logoCoren from "../../assets/images/logoCoren.png";
import { useHistory, useLocation } from "react-router-dom";
import { auth, Logout } from "../../services/auth";
import { getUserData } from "../../services/firestore";
import Certificates from "../Certificates";
import EmailsPage from "../EmailsPage";

export default function Dashboard() {
  const { state } = useLocation();
  const history = useHistory();
  const [userData, setUserData] = useState(state);
  const [isAdm, setAdm] = useState(true);
  const [menuSelected, setMenuSelected] = useState("home");
  const [liveList, setLiveList] = useState([]);

  const loadUserData = () => {
    getUserData(auth.currentUser.uid)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    loadUserData();
    getAllLivesData()
      .then((list) => {
        setLiveList(list);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <MenuBar>
        <ContentAvatar>
          <Avatar src={auth.currentUser.photoURL} />

          {isAdm && <TagADM>Administrador</TagADM>}
        </ContentAvatar>

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
          <text>Certificados</text>
        </MenuItem>

        {isAdm && (
          <>
            <MenuItem
              onClick={() => setMenuSelected("inscribes")}
              selected={menuSelected == "inscribes" && true}
            >
              <HomeIcon />
              <text>Usuários</text>
            </MenuItem>
            <MenuItem
              onClick={() => setMenuSelected("emails")}
              selected={menuSelected == "emails" && true}
            >
              <HomeIcon />
              <text>Enviar Email</text>
            </MenuItem>
          </>
        )}

        <Divider />
        <MenuItem
          onClick={() => Logout().then(() => history.push("/login"))}
          logout={true}
        >
          <ExitIcon />
          <text>Sair</text>
        </MenuItem>
      </MenuBar>
      <Content>
        <HeaderContent>
          <Title>
            {menuSelected == "home" && "Página Inicial"}
            {menuSelected == "certificate" && "Certificados"}
            {menuSelected == "inscribes" && "Inscritos"}
            {menuSelected == "emails" && "Enviar Email"}
          </Title>
          <LogoCoren src={logoCoren} />
        </HeaderContent>
        {menuSelected == "home" && (
          <HomePageDashboard
            liveList={liveList}
            refresh={loadUserData}
            completed={userData.completed}
          />
        )}
        {menuSelected == "certificate" && (
          <Certificates
            unlocked={liveList.every((live) =>
              userData.completed.includes(live.id)
            )}
          />
        )}
        {menuSelected == "inscribes" && <HomePageDashboardADM />}
        {menuSelected == "emails" && <EmailsPage />}
      </Content>
    </Container>
  );
}
