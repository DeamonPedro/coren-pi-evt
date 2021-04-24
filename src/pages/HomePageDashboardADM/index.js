import React, { useEffect, useState } from "react";
import { Container, Box, HeaderBox } from "./styles";
import { searchUserByCPF, getAnalytics } from "../../services/firestore";

export default function HomePageDashboardADM() {
  const [selectedUser, setSelectedUser] = useState({});
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    getAnalytics().then((data) => {
      setAnalytics(data);
    });
    searchUserByCPF("01793455325").then((user) => {
      setSelectedUser(user);
    });
  }, []);

  return (
    <Container>
      <Box>
        <HeaderBox>
          <h1>Inscritos</h1>
        </HeaderBox>
      </Box>
      {JSON.stringify(analytics)}
    </Container>
  );
}
