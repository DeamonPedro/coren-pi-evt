import React, { useState } from "react";

import {
  Container,
  Box,
  HeaderBox,
  CertificateBox,
  IconCertificate,
  Description,
  Options,
  ShareIcon,
  DownloadIcon,
  Warning,
} from "./styles";

export default function Certificates({}) {
  const [certificateApproved, isCertificateApproved] = useState(false);
  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Seus Certificados</h1>
        </HeaderBox>
        {certificateApproved ? (
          <CertificateBox>
            <IconCertificate></IconCertificate>
            <Description>
              <h1>Certificação Semana da Enfermagem 2021</h1>
            </Description>
            <Options>
              <ShareIcon />
              <DownloadIcon />
            </Options>
          </CertificateBox>
        ) : (
          <Warning>Conclua o curso para o certificado está disponível</Warning>
        )}
      </Box>
    </Container>
  );
}
