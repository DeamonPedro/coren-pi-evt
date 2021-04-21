import React, { useState } from "react";
import { GooglePopupLogin, auth } from "../../services/auth";
import { getUserData, registerUserData } from "../../services/firestore";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [CPF, setCPF] = useState("");
  const [occupation, setOccupation] = useState("notSelected");
  const [needRegister, setNeedRegister] = useState(false);

  const checkSubscription = () => {
    getUserData(auth.currentUser.uid)
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => {
        if (error === "not exist") {
          setNeedRegister(true);
        }
      });
  };

  const verifyForm = (CPF, nurse) => {
    if (CPF != "" && nurse != "notSelected") {
      registerUserData(auth.currentUser.uid, { CPF, nurse }).then(() => {
        history.push("/dashboard");
      });
    }
  };

  return (
    <>
      <button onClick={() => GooglePopupLogin().then(checkSubscription)}>
        LOGIN COM O GOOGLE
      </button>
      <form disabled={needRegister}>
        <label>CPF</label>
        <input
          value={CPF}
          onChange={(evt) => setCPF(evt.target.value)}
          type="number"
          id="CPF"
          name="CPF"
        />
        <label>OCUPAÇÃO</label>
        <select
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
        </select>
        <button onClick={() => verifyForm(CPF, occupation)}>enviar</button>
      </form>
    </>
  );
}
