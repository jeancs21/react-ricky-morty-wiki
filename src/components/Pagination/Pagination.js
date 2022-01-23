import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {
  //pageCount es extraido de la documentacion de la api que se esta usando en este proyecto, el cual esta dentro de info
  //Para info?.page lo que quiere decir es: si la info existe, entonces añade .pages
  //Para ver los Props listados en el componente, ver: https://www.npmjs.com/package/react-paginate
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {setPageNumber(data.selected + 1)}}
      pageCount={info?.pages}
    />
  );
    // let next = () => {
    //     // x es el valor previo de pageNumber en app.js
    //     setPageNumber((x) => x + 1);
    // }

    // let prev = () => {
    //     //Para evitar que las paginas sean menor que 0, se usa este if el cual ejecutara
    //     //la funcion solamente si pageNumber es igual a 1 (la primera pagina)
    //     if(pageNumber === 1) return 
    //     setPageNumber((x) => x - 1);
    // }
  // return (
  //   <div className='container d-flex justify-content-center gap-5 my-5'>
  //       <button onClick={prev} className='btn btn-primary'>Prev</button>
  //       <button onClick={next} className='btn btn-primary'>Next</button>
  //   </div>
  // );
};

export default Pagination;
