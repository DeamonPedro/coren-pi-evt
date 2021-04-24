import React, { useEffect, useState } from "react";

import { Container, DayContainer, Divider } from "./styles";
import { getAllLivesData } from "../../services/firestore";

export default function Programing() {
  const [liveList, setLiveList] = useState([]);

  useEffect(() => {
    getAllLivesData()
      .then((list) => {
        setLiveList(list);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1 className="title">Programação</h1>
      {liveList.length != 0 &&
        liveList.map((item) => {
          const { title, description, duration, startOn, speakers } = item;
          const date = startOn.toDate().toLocaleString().split(" ")[0];
          const day = startOn
            .toDate()
            .toLocaleString()
            .split(" ")[0]
            .split("/")[0];
          const hour = startOn
            .toDate()
            .toLocaleString()
            .split(" ")[1]
            .substring(0, 5);
          return (
            <>
              <DayContainer>
                <div className="day">
                  <h1>{day}</h1>
                </div>
                <div className="information">
                  <h1>{title + " | " + description}</h1>
                  {speakers.map((item) => {
                    return <h3 className="speakers">{item}</h3>;
                  })}
                  <h3>{date}</h3>
                  <h3>
                    {"Horário de início: " +
                      hour +
                      " | Duração: " +
                      duration +
                      " horas"}
                  </h3>
                </div>
              </DayContainer>
              <Divider />
            </>
          );
        })}
    </Container>
  );
}
