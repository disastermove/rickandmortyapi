import { useEffect, useState } from "react";
import { Caja, Span, Container, Botones, More, Opciones } from "./Home.styles";

const Home = () => {
  const [items, setItems] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [next, setNext] = useState(2);
  const [showmoreinfo, setShowmoreinfo] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);

  useEffect(() => {
    Busqueda();
  }, []);

  const Busqueda = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        data.results && setItems(data.results);
      });
    if (busqueda !== "") {
      setItems([]);
    }
  };

  const nextPage = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((res) => res.json())
      .then((data) => {
        data.results && setItems(data.results);
        setNext(next + 1);
      });
  };

  const prevPage = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next - 2}`)
      .then((res) => res.json())
      .then((data) => {
        data.results && setItems(data.results);
        setNext(next - 1 ? next - 1 : 1);
      });
  };

  return (
    <>
      <Container>
        <div className="input">
          <input
            type="text"
            placeholder="Buscar personaje"
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button onClick={() => Busqueda()}>Buscar</button>
        </div>
        <p>
          {items.length > 0
            ? `${items.length} personajes encontrados`
            : "No se encontraron personajes"}
        </p>
        {items.map((item) => (
          <Caja
            id={item.id}
            currentPos={currentPos}
            onClick={() => {
              setCurrentPos(item.id);
              setShowmoreinfo(!showmoreinfo);
            }}
          >
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
            <Span alive={item.status}></Span>
            <span>{item.status + " - " + item.species}</span>
            <More>
              <p>
                <strong>Especie:</strong> {item.species}
              </p>
              <p>
                <strong>Genero:</strong> {item.gender}
              </p>
              <p>
                <strong>Origen:</strong> {item.origin.name}
              </p>
              <p>
                <strong>Episodios:</strong> {item.episode.length}
              </p>
            </More>
          </Caja>
        ))}
        <div style={{ display: "flex" }}>
          <Botones
            style={{ borderRadius: "10px 0 0 10px" }}
            onClick={() => prevPage()}
          >
            Anterior
          </Botones>
          <Botones
            style={{ borderRadius: "0 10px 10px 0" }}
            onClick={() => nextPage()}
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
