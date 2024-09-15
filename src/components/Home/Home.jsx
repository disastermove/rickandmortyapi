import { useState } from "react";
import { Container, Botones } from "./Home.styles";
import { getCharacter, getCharacterAndPage } from "../../services/api";
import Box from "../Box";
import { useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("Rick");

  useEffect(() => {
    getCharacterAndPage(busqueda, page)
      .then((res) => {
        console.log(res);
        setItems(res.data.results);
      })
      .catch((error) => {
        console.error("Error al obtener la página:", error);
      });
  }, [busqueda, page]);

  const Busqueda = () => {
    if (busqueda.trim() === "") {
      return;
    }

    getCharacter(busqueda)
      .then((res) => {
        console.log(res);
        setItems(res.data.results);
        setPage(1);
      })
      .catch((error) => {
        console.error("Error al buscar personajes:", error);
      });
  };

  const Next = () => {
    getCharacterAndPage(busqueda, page + 1)
      .then((res) => {
        console.log(res);
        setItems(res.data.results);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error al obtener la siguiente página:", error);
      });
  };

  const Prev = () => {
    if (page > 1) {
      getCharacterAndPage(busqueda, page - 1)
        .then((res) => {
          console.log(res);
          setItems(res.data.results);
          setPage(page - 1);
        })
        .catch((error) => {
          console.error("Error al obtener la página anterior:", error);
        });
    }
  };

  return (
    <>
      <Container>
        <div className="input">
          <input
            type="text"
            placeholder="Buscar personaje"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Busqueda();
              }
            }}
          />
          <button onClick={Busqueda}>Buscar</button>{" "}
        </div>

        <p>
          {items.length > 0
            ? `${items.length} personajes encontrados`
            : "No se encontraron personajes"}
        </p>

        {items.map((item) => (
          <Box key={item.id} item={item}></Box>
        ))}

        <div className="pagination">
          <Botones
            style={{ borderRadius: "10px 0 0 10px" }}
            onClick={Prev}
            disabled={page <= 1}
          >
            Anterior
          </Botones>
          <Botones style={{ borderRadius: "0 10px 10px 0" }} onClick={Next}>
            Siguiente
          </Botones>
        </div>

        <p>Rick And Morty</p>
      </Container>
    </>
  );
};

export default Home;
