import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const About = () => {
  let { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
          console.log(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className="container">
      <h1>Estoy en Detail Component</h1>
      <div className="w-25">
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
        />
      </div>
    </div>
  );
};

export default About;
