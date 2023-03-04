import { NavLink } from "react-router-dom";

const Card = ({ image, name, species, gender, onClose, id }) => (
  <div className="col">
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <NavLink to={`/detail/${id}`}>
          <h5 className="card-title">{name}</h5>
        </NavLink>
        <p className="card-text">{species}</p>
        <p className="card-text">{gender}</p>
        <button onClick={() => onClose(id)}>X</button>
      </div>
    </div>
  </div>
);

export default Card;
