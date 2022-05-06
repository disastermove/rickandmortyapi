import { useEffect, useState } from "react";
import { Container } from "./Home.styles";
import { getPeople } from "../../services/api";
import Box from "../Box";

const Home = () => {
  const [items, setItems] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    Busqueda();
  }, []);

  const Busqueda = () => {
    getPeople(busqueda).then((res) => {
      setItems(res.data.results);
    });
    if (busqueda !== "") {
      setItems([]);
    }
  };

  return (
    <>
      <Container>
        <div className="input">
          <input
            type="text"
            placeholder="Buscar personaje"
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Busqueda();
              }
            }}
          />
          <button onClick={() => Busqueda()}>Buscar</button>
        </div>
        <p>
          {items.length > 0
            ? `${items.length} personajes encontrados`
            : "No se encontraron personajes"}
        </p>
        {items.map((item) => (
          <Box item={item}></Box>
        ))}
        <p>Rick And Morty</p>
      </Container>
    </>
  );
};

export default Home;
