import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const CardDetails = () => {
    let {id} = useParams()
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, location, origin, gender, species, status, type} = fetchedData

    console.log(fetchedData)

    let api = `https://rickandmortyapi.com/api/character/${id}`;
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
        <div className='container d-flex justify-content-center'>
            <div className='d-flex flex-column gap-3'>
                <h1 className='text-center'>{name}</h1>
                <img src={image} alt='' className='img-fluid'></img>
                {(()=>{
                        if(status === "Dead"){
                            return (
                                <div className= "badge bg-danger fs-5">
                                    {status}
                                </div>
                            );
                        }
                        else if(status === "Alive"){
                            return (
                                <div className= "badge bg-success fs-5">
                                    {status}
                                </div>
                            );
                        }
                        else{
                            return (
                                <div className= "badge bg-secondary fs-5">
                                    {status}
                                </div>
                            )

                        }
                    })()}
                    
                    <div className='content'>
                        <div className=''>
                            <span className='fw-bold'>Gender : </span>
                            {gender}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>Species : </span>
                            {species}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>Type : </span>
                            {type === ""? "Unknown" : type}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>location : </span>
                            {location?.name}
                        </div>
                        <div className=''>
                            <span className='fw-bold'>origin : </span>
                            {origin?.name}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CardDetails;
