import React, { useState } from "react";

import { Container, Box, HeaderBox, Input, Message, Button } from "./styles";

export default function EmailsPage() {
  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Titulo</h1>
        </HeaderBox>
        <Input placeholder="Assunto" />

        <HeaderBox>
          <h1>Mensagem</h1>
        </HeaderBox>
        <Message placeholder="Mensagem" message={true} />
        <Button
          onClick={() => {
            fetch(
              "https://us-central1-coren-pi-evt.cloudfunctions.net/sendMail",
              {
                method: "POST",
                body: "teste",
              }
            ).then(() => {
              console.log("success");
            });
          }}
        >
          Enviar para todos os inscritos
        </Button>
      </Box>
    </Container>
  );
}
