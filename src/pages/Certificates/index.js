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
import { useWindowDimensions } from "../../services/utils";
export default function HomePageDashboardADM({ unlocked }) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Inscritos</h1>
        </HeaderBox>
        {unlocked ? (
          <CertificateBox>
            {width > 800 && <IconCertificate />}
            <Description>
              <h1>Certificação Semana da Enfermagem 2021</h1>
            </Description>
            <Options>
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
