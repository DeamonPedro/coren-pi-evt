import React, { useEffect, useState } from "react";

import { Container, DayContainer, Divider } from "./styles";
import { getAllLivesData } from "../../services/firestore";
import { Skeleton } from "@material-ui/lab";
export default function Programing() {
  const [liveList, setLiveList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getAllLivesData()
      .then((list) => {
        setLiveList(list);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  window.scrollTo(0, 0);
  return (
    <Container>
      <h1 className="title">Programação</h1>

      {isLoading ? (
        <DayContainer>
          <div className="day">
            <Skeleton variant="circle">
              <h1>15</h1>
            </Skeleton>
          </div>
          <div className="information">
            <Skeleton>
              <h1>{"teste teste   | teste teste teste teste"}</h1>{" "}
            </Skeleton>
            <Skeleton>
              <h3 className="speakers">teste teste teste teste</h3>{" "}
            </Skeleton>
            <Skeleton>
              <h3>00/00/0000</h3>{" "}
            </Skeleton>
            <Skeleton>
              <h3>
                {"Horário de início: " +
                  "teste" +
                  " | Duração: " +
                  "teste" +
                  " horas"}
              </h3>{" "}
            </Skeleton>
          </div>
        </DayContainer>
      ) : (
        <>
          {liveList.map((item) => {
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
        </>
      )}
    </Container>
  );
}
