import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

export default function App() {
  const [attrici, setAttrici] = useState([]);
  const [attori, setAttori] = useState([]);

  useEffect(() => {
    fetchAttrici();
  }, []);

  useEffect(() => {
    fetchAttori();
  }, []);

  function fetchAttrici() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((resp) => {
        setAttrici(resp.data);
      });
  }

  function fetchAttori() {
    axios
      .get(" https://lanciweb.github.io/demo/api/actors/")
      .then((resp) => {
        setAttori(resp.data);
      });
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center text-danger my-4">Lista attrici:</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* card */}

          {attrici.map((personaggio) => (
            <Card key={personaggio.id} personaggio={personaggio} />
          ))}
        </div>
        {/* card */}
        {/* card attori */}
        <h2 className="text-center text-danger my-4">Lista attori:</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {attori.map((personaggio) => (
            <Card key={personaggio.id} personaggio={personaggio} />
          ))}
          {/* card attori */}
        </div>
      </div>
    </>
  );
}
