import styled, { createGlobalStyle } from "styled-components";

export const Botones = styled.button`
  display: inline-block;
  background-color: rgb(60, 62, 68);
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 30px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  transition: all 0.5s;
  &:focus {
    outline: none;
    transition: all 0.5s;
    box-shadow: 0 0 0 0.2rem rgb(60 191 143 / 15%);
    position: relative;
    z-index: 2;
  }
`;

export const Span = styled.span`
  position: relative;
  top: -10px;
  font-size: 1rem;
  margin: 0;
  border-radius: 4px;
  margin-top: 28px !important;
  max-width: max-content;
  padding: 5px;
  height: max-content;
  background: ${({ alive }) =>
    alive === "Alive"
      ? "rgb(85, 204, 68)"
      : alive === "Dead"
      ? "rgb(214, 61, 46)"
      : "gray"};
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .input {
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    input {
      width: 300px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid rgb(60, 62, 68);
      padding: 0 10px;
      margin: 10px 10px 10px 0;
      font-size: 1rem;
      color: rgb(60, 62, 68);
      background-color: rgb(255, 255, 255);
      &:focus {
        outline: none;
      }
    }
    button {
      width: 100px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid rgb(60, 62, 68);
      background-color: rgb(85, 204, 68);
      color: rgb(255, 255, 255);
      font-size: 1rem;
      cursor: pointer;
      transition: 0.5s;
      &:focus {
        transition: 0.5s;
        outline: none;
        box-shadow: 0 0 0 0.25em rgb(85, 204, 68, 0.5);
      }
    }
  }
  p {
    font-size: 1rem;
    position: relative;
    top: -10px;
    left: 0;
    color: rgb(60, 62, 68);
    margin-bottom: 0;
  }
`;

export const More = styled.div`
  display: grid;
  grid-template-columns: 120px 100px 100px 100px;
  justify-content: center;
  margin: auto;
  color: white;
  position: relative;
  top: 5em;
  left: -25em;
  width: 100%;
  max-width: 1200px;
  strong {
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
  }
  p {
    color: rgb(245, 245, 245);
    font-size: 112.5%;
    width: 70px;
    margin: 0;
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: rgb(36, 40, 47);
        color: white;
        font-family: 'Roboto', sans-serif;
    }
    ::-webkit-scrollbar {
      width: 16px;
    }
    ::-webkit-scrollbar-thumb {
      height: 56px;
      border-radius: 8px;
      border: 4px solid transparent;
      background-clip: content-box;
      background-color: #606060;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #909090;
    }
`;
