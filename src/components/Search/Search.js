import React from 'react';
import styles from './Search.module.scss'

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input onChange={(e)=> {
            //por cada busqueda que se haga debe mandarnos a la pagina 1.
            setPageNumber(1);
            //captura lo que escribimos
            setSearch(e.target.value);
        }} placeholder='Search for Characters' type="text" className={styles.input} />
        <button onClick={(e) => {
            //evita que el boton refresque la pagina por cada click
            e.preventDefault();
        }} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  );
};

export default Search;
