import React, { useState, useEffect } from "react";

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
  People,
  Email,
} from "./styles";
import HomePageDashboard from "../HomePageDashboard";
import HomePageDashboardADM from "../HomePageDashboardADM";
import { getAllLivesData } from "../../services/firestore";
import logoCoren from "../../assets/images/logoCoren.png";
import { useHistory, useLocation } from "react-router-dom";
import { auth, Logout } from "../../services/auth";
import { getUserData } from "../../services/firestore";

import Certificates from "../Certificate";
import EmailsPage from "../EmailsPage";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useWindowDimensions } from "../../services/utils";

export default function Dashboard() {
  const { state } = useLocation();
  const history = useHistory();

  const [userData, setUserData] = useState(state ? state : null);

  const [visibleMenu, setVisibleMenu] = useState(false);

  const [menuSelected, setMenuSelected] = useState("home");
  const [liveList, setLiveList] = useState([]);
  const { width, height } = useWindowDimensions();

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

  useEffect(() => {
    width > 800 ? setVisibleMenu(true) : setVisibleMenu(false);
  }, [width]);

  return (
    <Container>
      {userData && (
        <>
          <MenuBar visible={visibleMenu}>
            {width < 800 && (
              <a
                onClick={() => setVisibleMenu(false)}
                style={{ position: "absolute", right: 20 }}
              >
                <CloseIcon style={{ fontSize: "30" }} />
              </a>
            )}
            <ContentAvatar>
              <Avatar src={auth.currentUser.photoURL} />

              {userData.admin && <TagADM>Administrador</TagADM>}
            </ContentAvatar>

            <Name>{userData.nameComplete}</Name>

            <MenuItem
              onClick={() => (
                setMenuSelected("home"), width < 800 && setVisibleMenu(false)
              )}
              selected={menuSelected == "home" && true}
            >
              <HomeIcon />
              <text>Página inicial</text>
            </MenuItem>
            <MenuItem
              onClick={() => (
                setMenuSelected("certificate"),
                width < 800 && setVisibleMenu(false)
              )}
              selected={menuSelected == "certificate" && true}
            >
              <AwardIcon />
              <text>Certificado</text>
            </MenuItem>

            {userData.admin && (
              <>
                <MenuItem
                  onClick={() => (
                    setMenuSelected("subscribers"),
                    width < 800 && setVisibleMenu(false)
                  )}
                  selected={menuSelected == "subscribers" && true}
                >
                  <People />
                  <text>Usuários</text>
                </MenuItem>
                <MenuItem
                  onClick={() => (
                    setMenuSelected("emails"),
                    width < 800 && setVisibleMenu(false)
                  )}
                  selected={menuSelected == "emails" && true}
                >
                  <Email />
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
              {width < 800 && (
                <a onClick={() => setVisibleMenu(true)}>
                  <MenuIcon style={{ fontSize: "30" }} />
                </a>
              )}
              <Title>
                {menuSelected == "home" && "Página Inicial"}
                {menuSelected == "certificate" && "Certificado"}
                {menuSelected == "subscribers" && "Usuários"}
                {menuSelected == "emails" && "Enviar Email"}
              </Title>
              {width > 800 && <LogoCoren src={logoCoren} />}
            </HeaderContent>
            {menuSelected == "home" && (
              <HomePageDashboard
                nameUser={userData.nameComplete}
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
                name={userData.nameComplete}
              />
            )}
            {menuSelected == "subscribers" && <HomePageDashboardADM />}
            {menuSelected == "emails" && <EmailsPage />}
          </Content>
        </>
      )}
    </Container>
  );
}
