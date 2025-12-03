import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

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
{attrici.map((attrice) => (
  <div key={attrice.id} className="col">
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-4">
          <img src={attrice.image} alt={attrice.name} className="img-fluid rounded-start actor-img"/>
        </div>
        <div className="col-8">
          <div className="card-body p-2 text-start">
            <h5 className="card-title fw-bold mb-2">{attrice.name}</h5>
            <p className="card-text m-0"><span className="fw-bold">Anno: {attrice.birth_year}</span></p>
            <p className="card-text m-0"><span className="fw-bold">Nazionalità: </span>{attrice.nationality}</p>
            <p className="card-text mt-2"><span className="fw-bold">Bio: </span>{attrice.biography}</p>
<p className="card-text text-end"><small className="text-body-secondary"><span className="fw-bold">Premi: </span>{attrice.awards}</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
))}
{/* card */}
        </div>
      </div>
    </>
  );
}
