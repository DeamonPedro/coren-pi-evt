import React, { useState } from "react";

import { Container, NotLoadedBar, LoadedBar } from "./styles";

export default function ProgressBar({ percentage }) {
  return (
    <Container>
      <NotLoadedBar>
        <LoadedBar percentage={percentage} />
      </NotLoadedBar>
    </Container>
  );
}
