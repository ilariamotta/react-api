import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [attrici, setAttrici] = useState([]);

  useEffect(() => {
    fetchAttrici();
  }, []);

  function fetchAttrici() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((resp) => {
        console.log(resp);
      
      });
  }
  
  return (
    <>
      <Header />

    </>
  );
}



