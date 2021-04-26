import React, { useCallback, useState } from "react";
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
  Input,
} from "./styles";
import iconGoogle from "../../assets/images/iconGoogle.svg";
import illustrationLogin from "../../assets/images/illustrationLogin.svg";
import logoCoren from "../../assets/images/logoCoren.png";
import { useWindowDimensions } from "../../services/utils";
export default function Login() {
  const { width, height } = useWindowDimensions();
  const history = useHistory();
  const [CPF, setCPF] = useState("");
  const [nameComplete, setNameComplete] = useState("");
  const [isFormComplete, setFormComplete] = useState("");
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
    if (
      CPF != "" &&
      nurse != "notSelected" &&
      nameComplete != "" &&
      verifyCPF(CPF)
    ) {
      const userData = {
        CPF: CPF.replace(/\-/g, "").replace(/\./g, ""),
        nurse,
        email: auth.currentUser.email,
        nameComplete,
        completed: [],
      };
      setFormComplete("");

      registerUserData(auth.currentUser.uid, userData).then(() => {
        history.push("/dashboard", userData);
      });
    } else if (
      CPF != "" &&
      nurse != "notSelected" &&
      nameComplete != "" &&
      !verifyCPF(CPF)
    ) {
      setFormComplete("Insira um CPF válido * ");
    } else {
      setFormComplete("Preencha todos os campos *");
    }
  };

  function cpfMask(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  const verifyCPF = (CPF) => {
    function testaCPF(strCPF) {
      strCPF = strCPF.replace(/\-/g, "").replace(/\./g, "");
      console.log(strCPF);
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    }

    return testaCPF(CPF);
  };

  return (
    <Container>
      {!needRegister ? (
        <ContentLogin>
          <LeftContent>
            <img src={logoCoren} />
            <h1>Inscrição / Login</h1>
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
          {width > 800 && (
            <RightContent>
              <img src={illustrationLogin} />
            </RightContent>
          )}
        </ContentLogin>
      ) : (
        <ContentRegister>
          <img src={logoCoren} />
          <h1>Adicione seus dados</h1>
          <span>
            Precisamos de alguns dados seus para autorizar o seu acesso a nossa
            plataforma.
          </span>
          {isFormComplete != "" && <h2>{isFormComplete}</h2>}
          <label>Seu nome (completo) *</label>
          <span style={{ fontSize: 12 }}>
            Nome que irá constar no seu certificado do evento.
          </span>
          <Input
            placeholder="Seu nome para certificação"
            value={nameComplete}
            onChange={(evt) => setNameComplete(evt.target.value)}
            type="text"
            id="name"
            name="name"
          />
          <label>CPF *</label>

          <Input
            className="cpf"
            errorCPF={CPF.length == 14 ? verifyCPF(CPF) : true}
            placeholder="000.000.000-00"
            value={cpfMask(CPF)}
            onChange={(evt) => (evt.preventDefault(), setCPF(evt.target.value))}
            id="CPF"
            name="CPF"
            type="text"
            maxLength="14"
          />
          <label>Ocupação * </label>
          <Select
            value={occupation}
            onChange={(evt) => setOccupation(evt.target.value)}
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
      )}
    </Container>
  );
}
