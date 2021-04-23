import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function PageNotFound() {
  return (
    <Container>
      <h1>Página nao encontrada</h1>
      <Link to="/">
        <a>{"< "}Voltar para a página inicial</a>
      </Link>
    </Container>
  );
}
