import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />

      </Routes>

    </Router>
  )
}

const Home = () => {
  //Este es el estado para almacenar el numero de paginas
  let [pageNumber, setPageNumber] = useState(1);
  
  //Este es el estado para capturar los nombres que se escriben en el textbox
  let[search, setSearch] = useState("");
  
  //este es el estado para filtrar los status de los personajes
  let [status, setStatus] = useState("");

  //este es el estado para filtrar el genero de los personajes
  let [gender, setGender] = useState("");

  //este es el estado para filtrar las especies
  let [species, setSpecies] = useState("");

  //Este es el estado para mantener/almacenar la informacion de los personajes
  let [fetchedData, updateFetchedData] = useState([]);

  //usaremos results para el Card component. E info para Pagination component.
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
  /*How to fetch the api? Para este caso usando useEffect.
  Cada vez que cambie la variable api, quiero data nueva dentro del useEffect */

  useEffect(() => {
    /* esta es una IIFE (inmediatily invoke function expresion) a diferencia de una function() convencional
    que hay que definirla y luego invocarla para que se ejecute. Esta no.
    Recordar que await es para decirle a javascript que espere a que el fetch termine de descargar los datos de la api */
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      //data pasa a ser fetchData dentro del state y dado que devuelve tanto info como reusltes dentro del object del api,
      //arriba se hace destructuring para hacer referencia a uno de ellos desde donde sea que se llamen.
      updateFetchedData(data);
    })();


  },[api])


  return (
    <div className="App">
      <h1 className='text-center mb-4'>Characters</h1>
      {/*Recordar que cada row tiene dentro 12 columnas */}
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
          setSpecies={setSpecies}
          setGender={setGender}
          setStatus={setStatus}
          setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results = {results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />

    </div>
  );
}

export default App;
