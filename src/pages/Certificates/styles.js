import styled, { css } from "styled-components";
import CardMembershipRoundedIcon from "@material-ui/icons/CardMembershipRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import SendIcon from "@material-ui/icons/Send";
import GetAppIcon from "@material-ui/icons/GetApp";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 50px 0 50px;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  margin-top: 30px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: #43454f;
    font-weight: 300;
    font-size: 26px;
  }
  h2 {
    color: #43454f;
    font-size: 20px;
  }
`;

export const CertificateBox = styled.div`
  display: grid;
  grid-template-columns: 60px auto 35px;
  align-items: center;
  grid-gap: 15px;
`;

export const IconCertificate = styled(CardMembershipRoundedIcon)`
  && {
    font-size: 50px;
    color: #219ce1;
  }
`;

export const Description = styled.div`
  h1 {
    font-weight: 300;
    width: 300px;
    color: #43454f;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShareIcon = styled(SendIcon)`
  && {
    font-size: 25px;
    color: #43454f;
    margin-right: 5px;
    cursor: pointer;
  }
`;
export const DownloadIcon = styled(GetAppIcon)`
  && {
    font-size: 25px;
    color: #43454f;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const Warning = styled.text`
  font-weight: 300;
  font-size: 15px;
`;
