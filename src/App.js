import { Fragment, useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import NotFound from "./components/NotFound.jsx";
import Form from "./components/Form.jsx";
import Home from "./components/Home.jsx";
import "bootswatch/dist/vapor/bootstrap.min.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    fetch(`https://rickandmortyapi.com/api/character/${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    let filtered = characters.filter((character) => character.id !== id);
    setCharacters([...characters, filtered]);
    setCharacters(filtered);
  };

  return (
    <Fragment>
      <Nav onSearch={onSearch} setSearch={setSearch} />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Form />} />
        <Route
          path="/cards"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
