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
<<<<<<< HEAD
import Certificates from "../Certificate";
=======
import Certificates from "../Certificates";
import EmailsPage from "../EmailsPage";
>>>>>>> d2099f4f9ebbb48c5f9e2fe085aabfcbc82a6409

export default function Dashboard() {
  const { state } = useLocation();
  const history = useHistory();
<<<<<<< HEAD
  const [userData, setUserData] = useState(state ? state : null);
=======
  const [userData, setUserData] = useState(state);
  const [isAdm, setAdm] = useState(true);
>>>>>>> d2099f4f9ebbb48c5f9e2fe085aabfcbc82a6409
  const [menuSelected, setMenuSelected] = useState("home");
  const [liveList, setLiveList] = useState([]);

  console.log(userData);

  const loadUserData = () => {
    getUserData(auth.currentUser.uid)
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/login");
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
<<<<<<< HEAD
      {userData && (
        <>
          <MenuBar>
            <Avatar src={auth.currentUser.photoURL} />
            <Name>
              {userData.nameComplete !== null
                ? userData.nameComplete
                : auth.currentUser.displayName}
            </Name>
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
                {menuSelected == "home" ? "Página Inicial" : "Certificados"}
              </Title>
              <LogoCoren src={logoCoren} />
            </HeaderContent>
            {menuSelected == "home" ? (
              <HomePageDashboard
                liveList={liveList}
                refresh={loadUserData}
                completed={userData.completed}
              />
            ) : (
              <Certificates
                name={userData.nameComplete}
                unlocked={liveList.every((live) =>
                  userData.completed.includes(live.id)
                )}
              />
            )}
          </Content>
        </>
      )}
=======
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
>>>>>>> d2099f4f9ebbb48c5f9e2fe085aabfcbc82a6409
    </Container>
  );
}
