    import React from 'react';
    import Status from '../Filters/Category/Status'
    import Species from '../Filters/Category/Species'
    import Gender from '../Filters/Category/Gender'
    
    const Filters = ({setStatus, setPageNumber}) => {
      return (
        <div className='col-3'>
          <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
          <div style={{cursor: "pointer"}} className='text-center text-primary text-decoration-underline mb-4'
          >
          Clear Filters
          </div>

          <div className="accordion" id="accordionExample">
            <Status setPageNumber={setPageNumber} setStatus={setStatus} />
            <Species />
            <Gender />
          </div>

        </div>
      );
    };
    
    export default Filters;
    