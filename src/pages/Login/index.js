import React, { useState } from "react";
import { GooglePopupLogin, auth } from "../../services/auth";
import { getUserData, registerUserData } from "../../services/firestore";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  ContentLogin,
  LeftContent,
  RightContent,
  ButtonGoogle,
  IconGoogle,
  ContentRegister,
  Button,
  Select,
} from "./styles";
import iconGoogle from "../../assets/images/iconGoogle.svg";
import illustrationLogin from "../../assets/images/illustrationLogin.svg";
import logoCoren from "../../assets/images/logoCoren.png";
export default function Login() {
  const history = useHistory();
  const [CPF, setCPF] = useState("");
  const [nameComplete, setNameComplete] = useState("");
  const [occupation, setOccupation] = useState("notSelected");
  const [needRegister, setNeedRegister] = useState(false);

  const checkSubscription = (userData) => {
    console.log(userData);
    getUserData(userData.user.uid)
      .then((data) => {
        history.push("/dashboard", data);
      })
      .catch((error) => {
        console.log(error);
        if (error === "not exist") {
          setNeedRegister(true);
          setNameComplete(userData.user.displayName);
        }
      });
  };

  const verifyForm = (CPF, nurse) => {
    if (CPF != "" && nurse != "notSelected") {
      const userData = {
        CPF,
        nurse,
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName,
        completed: [],
      };
      registerUserData(auth.currentUser.uid, userData).then(() => {
        history.push("/dashboard", userData);
      });
    }
  };

  const Resister = () => {
    return (
      <ContentRegister>
        <img src={logoCoren} />
        <h1>Adicione seus dados</h1>
        <span>
          Precisamos de alguns dados seus para autorizar o seu acesso a nossa
          plataforma.
        </span>
        <label>Seu nome (completo) *</label>
        <input
          placeholder="Seu nome para certificação"
          value={nameComplete}
          onChange={(evt) => setNameComplete(evt.value)}
          type="text"
          id="CPF"
          name="CPF"
        />
        <label>CPF *</label>
        <input
          placeholder="000.000.000-00"
          value={CPF}
          onChange={(evt) => setCPF(evt.value)}
          type="number"
          id="CPF"
          name="CPF"
        />
        <label>Ocupação * </label>
        <Select
          value={occupation}
          onChange={(evt) => setOccupation(evt.value)}
          name="occupation"
          id="occupation"
          placeholder="selecione"
        >
          <option value="notSelected" disabled="true">
            Selecione
          </option>
          <option value="nurse">Enfermeiro(a)</option>
          <option value="nursingTec">Técnico(a) em enfermagem</option>
          <option value="nursingAssist">Auxiliar de enfermagem</option>
          <option value="student">Estudante</option>
        </Select>

        <Button onClick={() => verifyForm(CPF, occupation)}>
          Concluir inscrição
        </Button>
      </ContentRegister>
    );
  };

  return (
    <Container>
      {!needRegister ? (
        <ContentLogin>
          <LeftContent>
            <img src={logoCoren} />
            <h1>Login / Registro</h1>
            <span>
              Acesse pela sua conta do Google. Se for sua primeira vez na nossa
              plataforma, preencha seus dados após o login.
            </span>
            <ButtonGoogle
              onClick={() =>
                GooglePopupLogin().then((data) => checkSubscription(data))
              }
            >
              <IconGoogle src={iconGoogle} />
              Acessar com Google
            </ButtonGoogle>
            <h4>
              Nao possui conta do Google? clique <a>aqui.</a>{" "}
            </h4>
          </LeftContent>
          <RightContent>
            <img src={illustrationLogin} />
          </RightContent>
        </ContentLogin>
      ) : (
        <Resister />
      )}
    </Container>
  );
}
