import Card from "./Card";

const Cards = ({ characters, onClose }) => (
  <div className="container min-vh-100">
    <h1 className="py-4">Busca tu card en la barra de busqueda...</h1>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">    
      {characters.map((character) => (
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  </div>
);

export default Cards;
