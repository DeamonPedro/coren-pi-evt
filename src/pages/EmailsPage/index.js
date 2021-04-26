import React, { useState } from "react";
import { createEmail } from "../../services/firestore";

import { Container, Box, HeaderBox, Input, Message, Button } from "./styles";

export default function EmailsPage() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Titulo</h1>
        </HeaderBox>
        <Input
          value={subject}
          onChange={(evt) => setSubject(evt.target.value)}
          placeholder="Assunto"
        />

        <HeaderBox>
          <h1>Mensagem</h1>
        </HeaderBox>
        <Message
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          placeholder="Mensagem"
          message={true}
        />
        <Button
          onClick={() =>
            createEmail(subject, content).then(() => {
              console.log("success");
            })
          }
        >
          Enviar para todos os inscritos
        </Button>
      </Box>
    </Container>
  );
}
