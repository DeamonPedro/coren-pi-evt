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
  Button,
  Loading,
} from "./styles";
import CertificateTemplate from "../../assets/images/certificado_evento_coren.png";
import { jsPDF } from "jspdf";
import { auth } from "../../services/auth";
import { useWindowDimensions } from "../../services/utils";
export default function Certificate({ unlocked, name }) {
  const { width, height } = useWindowDimensions();
  const [isLoadingCertificate, setLoadingCertificate] = useState();
  const downloadCertificate = () => {
    const canvas = document.createElement("canvas");
    const base_image = new Image();
    base_image.src = CertificateTemplate;
    base_image.onload = function () {
      canvas.width = base_image.naturalWidth;
      canvas.height = base_image.naturalHeight;
      const pdf = new jsPDF("l", "px", [canvas.width, canvas.height]);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(base_image, 0, 0);
      ctx.font = "40px Roboto Mono";
      ctx.fillStyle = "white";
      ctx.fillText(auth.currentUser.uid, 50, 2430);
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.font = "bold 130px Calibri Light";
      ctx.fillText(name, 2200, 1200);
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        var blob = pdf.output();
        window.open(window.URL.createObjectURL(blob));
        setLoadingCertificate(false);
      } else {
        pdf
          .save("certificado.pdf", { returnPromise: true })
          .then(() => setLoadingCertificate(false));
      }
    };
  };

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Seu certificado</h1>
        </HeaderBox>
        {unlocked ? (
          <CertificateBox>
            {width > 800 && <IconCertificate />}
            <Description>
              <h1>Certificação Semana da Enfermagem 2021</h1>
            </Description>
            <Options>
              <Button
                onClick={() =>
                  !isLoadingCertificate &&
                  (downloadCertificate(), setLoadingCertificate(true))
                }
              >
                {isLoadingCertificate ? (
                  <Loading size={20} />
                ) : (
                  <>
                    Fazer download
                    <DownloadIcon />
                  </>
                )}
              </Button>
            </Options>
          </CertificateBox>
        ) : (
          <Warning>O certificado estará disponível ao final do evento.</Warning>
        )}
      </Box>
    </Container>
  );
}
