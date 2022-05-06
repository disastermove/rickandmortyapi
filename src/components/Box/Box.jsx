import { useState } from "react";
import { Caja, Span, More } from "./Box.styles";

const Box = ({ item }) => {
  const [showmoreinfo, setShowmoreinfo] = useState(false);

  const [currentPos, setCurrentPos] = useState(0);
  return (
    <>
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
        <span>{item.species}</span>
        <div className="hihi">
          <Span alive={item.status}>{item.status}</Span>
        </div>
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
    </>
  );
};

export default Box;
