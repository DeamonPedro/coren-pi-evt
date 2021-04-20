import React, { useState } from "react";

export default function Login() {
  return (
    <>
      <button>LOGIN COM O GOOGLE</button>

      <form>
        <label>CPF</label>
        <input type="number" id="CPF" name="CPF" />
        <label>OCUPAÇÃO</label>
        <select name="occupation" id="occupation" placeholder="selecione">
          <option value="notSelected" disabled="true">
            Selecione
          </option>
          <option value="nurse">Enfermeiro(a)</option>
          <option value="nursingTec">Técnico(a) em enfermagem</option>
          <option value="nursingAssist">Auxiliar de enfermagem</option>
        </select>
      </form>
      <button>enviar</button>
    </>
  );
}
