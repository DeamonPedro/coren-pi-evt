import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  HeaderBox,
  Loading,
  SearchBar,
  ContainerAnalytics,
  ContentUser,
  ButtonClose,
} from "./styles";
import { searchUserByCPF, getAnalytics } from "../../services/firestore";
import { Skeleton } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
export default function HomePageDashboardADM() {
  const [selectedUser, setSelectedUser] = useState({});
  const [analytics, setAnalytics] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isLoadingAnalytics, setLoadingAnalytics] = useState(true);
  const [isLoadingUser, setLoadingUser] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getAnalytics().then((data) => {
      setLoadingAnalytics(false);
      setAnalytics(data);
    });
  }, []);

  function cpfMask(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  function getUser(CPF) {
    setUserData({});
    setLoadingUser(true);
    searchUserByCPF(CPF)
      .then((data) => {
        setUserData(data);
      })
      .catch(() => {
        setUserData({
          nameComplete: "Não encontrado",
          nurse: "Não encontrado",
          completed: [],
        });
      });
  }

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Inscritos</h1>
        </HeaderBox>
        <SearchBar
          value={cpfMask(searchValue)}
          type="text"
          maxLength="14"
          placeholder={"Buscar inscrito por CPF"}
          onChange={(evt) =>
            setSearchValue(
              evt.target.value.replace(/\-/g, "").replace(/\./g, "")
            )
          }
          onKeyUp={(evt) => evt.key == "Enter" && getUser(searchValue)}
        />
        {isLoadingUser ? (
          userData == null ? (
            <ContentUser>
              <div className="information">
                <Skeleton>
                  <h1>Rainan Carneiro Araújo</h1>
                </Skeleton>
                <Skeleton>
                  <span>Ocupação: Estudante</span>
                </Skeleton>
                <Skeleton>
                  <span>Status: Evento nao concluído</span>
                </Skeleton>
              </div>
            </ContentUser>
          ) : (
            <>
              <ButtonClose
                onClick={() => (setSearchValue(""), setLoadingUser(false))}
              >
                <CloseIcon style={{ fontSize: 30 }} />
              </ButtonClose>
              <ContentUser>
                <div className="information">
                  <h1>{userData.nameComplete}</h1>
                  <span>
                    Ocupação:{" "}
                    {(userData.nurse == "nurse" && "Enfermeiro(a)") ||
                      (userData.nurse == "nursingTec" &&
                        "Técnico em Enfermagem") ||
                      (userData.nurse == "nursingAssist" &&
                        "Auxiliar de Enfermagem") ||
                      (userData.nurse == "student" && "Estudante")}
                  </span>
                  <span>Aulas Feitas: {userData.completed?.length}</span>
                </div>
              </ContentUser>
            </>
          )
        ) : (
          <ContainerAnalytics>
            <div>
              <h3>Inscritos</h3>

              {isLoadingAnalytics ? (
                <Skeleton>
                  <h1>AAAA</h1>
                </Skeleton>
              ) : (
                <h1>{analytics.total}</h1>
              )}
            </div>
            <div>
              <h3>Certificados</h3>
              {isLoadingAnalytics ? (
                <Skeleton>
                  <h1>AAAA</h1>
                </Skeleton>
              ) : (
                <h1>{analytics.certified}</h1>
              )}
            </div>
            <div className="occupation">
              <h3>Enfermeiros</h3>
              {isLoadingAnalytics ? (
                <Skeleton>
                  <h1>AAAA</h1>
                </Skeleton>
              ) : (
                <h1>{analytics.nurse}</h1>
              )}
            </div>
            <div className="occupation">
              <h3>Técnico(a) em Enfermagem</h3>
              {isLoadingAnalytics ? (
                <Skeleton>
                  <h1>AAAA</h1>
                </Skeleton>
              ) : (
                <h1>{analytics.nursingTec}</h1>
              )}
            </div>
            <div className="occupation">
              <h3>Auxiliar de Enfermagem</h3>
              {isLoadingAnalytics ? (
                <Skeleton>
                  <h1>AAAA</h1>
                </Skeleton>
              ) : (
                <h1>{analytics.nursingAssist}</h1>
              )}
            </div>
            <div className="occupation">
              <h3>Estudantes</h3>
              {isLoadingAnalytics ? (
                <Skeleton>
                  <h1>AAAA</h1>
                </Skeleton>
              ) : (
                <h1>{analytics.student}</h1>
              )}
            </div>
          </ContainerAnalytics>
        )}
      </Box>
    </Container>
  );
}
