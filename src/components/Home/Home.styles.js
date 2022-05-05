import styled, { createGlobalStyle } from "styled-components";

export const Caja = styled.div`
  background-color: rgb(60, 62, 68);
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  border-radius: 10px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 500px;
  display: grid;
  grid-template-columns: 70px 220px 30px 200px 0;
  grid-template-rows: ${({ showme }) =>
    showme ? "70px 220px 30px 200px 0" : "70px 220px 30px 200px 0"};
  height: ${({ currentPos, id }) => (currentPos === id ? "170px" : "70px")};
  transition: all 0.5s;
  color: white;
  overflow: hidden;
  h2 {
    font-size: 1.3rem;
    margin: 0;
    margin-left: 20px;
    margin-top: 20px;
  }
  span {
    font-size: 1rem;
    margin: 0;
    margin-top: 28px !important;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

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
  }
`;

export const Span = styled.span`
  height: 0.5rem;
  width: 0.5rem;

  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
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
  left: -18em;
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

export const Opciones = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 1;
  position: absolute;
  top: 5em;
  left: 10em;
  button {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgb(60, 62, 68);
    background-color: rgb(85, 204, 68);
    color: rgb(255, 255, 255);
    font-size: 1rem;
    margin-top: 2px;
    cursor: pointer;
    transition: 0.5s;
    &:focus {
      transition: 0.5s;
      outline: none;
      box-shadow: 0 0 0 0.25em rgb(85, 204, 68, 0.5);
    }
  }
  button:nth-child(5) {
    background-color: rgb(214, 61, 46);
    
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
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: rgb(36, 40, 47);
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(84, 204, 68, 0.5); border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(85, 204, 68);
    }
`;
