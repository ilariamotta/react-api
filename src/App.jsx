import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

export default function App() {
  const [attrici, setAttrici] = useState([]);

  useEffect(() => {
    fetchAttrici();
  }, []);

  function fetchAttrici() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((resp) => {
        console.log(resp.data);
        setAttrici(resp.data);
      });
  }

  return (
    <>
      <Header />
      <div className="container text-center mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
{/* card */}
{attrici.map((personaggio) => (
<Card key={personaggio.id} personaggio={personaggio} />
))}
{/* card */}
        </div>
      </div>
    </>
  );
}
