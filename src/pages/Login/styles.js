import styled, { css } from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export const Container = styled.div`
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #fcfcfc;
`;

export const ContentLogin = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  width: 80%;
  background-color: #fff;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
`;

export const LeftContent = styled.div`
  height: 100%;
  border-radius: 20px 0 0 20px;
  padding: 50px 60px;

  h1 {
    margin-top: 60px;
    font-size: 26px;
    color: #43454f;
    margin-bottom: 15px;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: #959292;
  }
  h4 {
    bottom: 20px;
    font-weight: normal;
    font-size: 12px;
    color: #959292;
    left: 145px;
    text-align: center;
    a {
      color: #007cc1;
    }
  }
`;

export const RightContent = styled.div`
  background-color: #9ef0ff;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 0 20px 20px 0;
  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }
`;

export const ButtonGoogle = styled.button`
  position: relative;
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding: 20px 0;
  width: 100%;
  color: #5f5f5f;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 45%;
`;

export const IconGoogle = styled.img`
  height: 30px;
  position: absolute;

  left: 30px;
`;

export const ContentRegister = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 450px;
  border-radius: 20px 0 0 20px;
  padding: 50px 60px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  img {
    width: 159px;
    height: 40px;
  }
  h1 {
    margin-top: 25px;
    font-size: 26px;
    color: #43454f;
    margin-bottom: 10px;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: #959292;
  }
  h2 {
    font-weight: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ff4b4b;
  }
  label {
    font-weight: bold;
    font-size: 16px;
    color: #43454f;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-radius: 5px;
    background-color: #f5f5f5;
    padding: 15px;
    font-size: 14px;

    ::placeholder {
      color: #959292;
    }
  }
`;

export const Select = styled.select`
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 15px;
  font-size: 14px;
  color: #959292;
  appearance: none;
`;

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  background-color: #044956;
  border: none;
  margin-top: 30px;
  color: #fff;
  &:hover {
    background-color: #076475;
  }
`;
