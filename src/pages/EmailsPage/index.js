import React, { useState } from "react";
import { createEmail } from "../../services/firestore";

import {
  Container,
  Box,
  HeaderBox,
  Input,
  Message,
  Button,
  Loading,
} from "./styles";

export default function EmailsPage() {
  const [subject, setSubject] = useState(
    "COREN-PI: SEMANA DA ENFERMAGEM 2021 | "
  );
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isEmailSend, setEmailSend] = useState(false);
  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Assunto</h1>
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
            !isLoading &&
            (setLoading(true),
            createEmail(subject, content).then(() => {
              setLoading(false);
              setEmailSend(true);
            }))
          }
        >
          {isLoading ? <Loading /> : "Enviar para todos os inscritos"}
        </Button>
        <h1>{isEmailSend && "E-MAIL ENVIADO"}</h1>
      </Box>
    </Container>
  );
}
