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
import { auth } from "../../services/auth";
import { useWindowDimensions } from "../../services/utils";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import FileSaver from "file-saver";

export default function Certificate({ unlocked, name }) {
  const { width, height } = useWindowDimensions();
  const [isLoadingCertificate, setLoadingCertificate] = useState();
  const timeCheck = Date.now() >= new Date("05-20-2021 16:30:00");

  const downloadCertificate = async () => {
    const url = window.location.origin + "/files/certificado_evento_coren.pdf";
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const TimesRoman = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const pages = pdfDoc.getPages();
    pages[0].drawText(name.toUpperCase(), {
      x:
        100 +
        (pages[0].getWidth() / 2 -
          TimesRoman.widthOfTextAtSize(
            name.toUpperCase(),
            name.length > 35 ? 20 : 30
          ) /
            2),
      y: 300,
      size: name.length > 35 ? 20 : 30,
      font: TimesRoman,
      color: rgb(0, 0, 0),
    });
    const pdfBytes = await pdfDoc.save();
    var bytes = new Uint8Array(pdfBytes);
    var blob = new Blob([bytes], { type: "application/pdf" });
    FileSaver.saveAs(blob, "certificado.pdf");
    setLoadingCertificate(false);
  };

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Seu certificado</h1>
        </HeaderBox>
        {unlocked && timeCheck ? (
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
          <Warning>
            {Date.now() > new Date("05-20-2021")
              ? "Certificado Indisponível: você não concluiu o evento no prazo estabelecido."
              : "O certificado estará disponível ao final do evento."}
          </Warning>
        )}
      </Box>
    </Container>
  );
}
