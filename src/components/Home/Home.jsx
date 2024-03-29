import { useEffect, useState } from "react";
import { Container, Botones } from "./Home.styles"; // styles
import { getCharacter, getCharacterAndPage } from "../../services/api"; // promesa
import Box from "../Box";

const Home = () => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    console.log("Cargando...");
    Busqueda();
  }, []);

  // intentar bajar lineas de codigo

  const Busqueda = () => {
    getCharacter(busqueda).then((res) => {
      console.log(res);
      setItems(res.data.results);
    });
    if (busqueda !== "") {
      setItems([]);
    }
  };

  const Next = () => {
    setPage(page + 1);
    getCharacterAndPage(busqueda, page + 1).then((res) => {
      console.log(res);
      setItems(res.data.results);
    });
  };

  const Prev = () => {
    setPage(page - 1);
    getCharacterAndPage(busqueda, page - 1).then((res) => {
      console.log(res);
      setItems(res.data.results);
    });
  };

  return (
    <>
      <Container>
        <div className="input">
          <input
            type="text"
            placeholder="Buscar personaje"
            onChange={(e) => {
              setBusqueda(e.target.value);
            }}
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
        <div className="pagination">
          <Botones
            style={{ borderRadius: "10px 0 0 10px" }}
            onClick={() => Prev()}
          >
            Anterior
          </Botones>
          <Botones
            style={{ borderRadius: "0 10px 10px 0" }}
            onClick={() => Next()}
          >
            Siguiente
          </Botones>
        </div>
        <p>Rick And Morty</p>
      </Container>
    </>
  );
};

export default Home;
