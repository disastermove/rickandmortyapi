import styled from 'styled-components';

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
  grid-template-columns: 70px 220px 125px 200px 0;
  grid-template-rows: ${({ showme }) =>
    showme ? "70px 220px 30px 200px 0" : "70px 220px 30px 200px 0"};
  height: ${({ showme }) => (showme ? "200px" : "70px")};
  transition: all 0.5s;
  color: white;
  overflow: hidden;
  cursor: pointer;
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
  .hihi {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
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

export const More = styled.div`
  display: grid;
  grid-template-columns: 120px 100px 100px 100px;
  justify-content: center;
  margin: auto;
  color: white;
  position: relative;
  top: 5em;
  opacity: ${({ showme }) => (showme ? "0" : "1")};
  transition: all 0.5s;
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