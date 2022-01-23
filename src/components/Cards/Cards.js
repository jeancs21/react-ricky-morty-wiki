    import React from 'react';
    import styles from './Cards.module.scss';
    
    const Cards = ({results}) => {
        let display;
        
        if (results) {
            display = results.map((x) => {
                let {id, name, image, location, status} = x;
                return (
                <div key={id} className="col-4 mb-4 position-relative">
                    <div className={styles.cards}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div style={{padding: "10px"}} className='content'>
                            <div className='fs-4 fw-bold mb-4'>{name}</div>
                            <div className='fs-6'>Last location</div>
                            <div className='fs-5'>{location.name}</div>
                        </div>
                    </div>
                    {/*Esta es una IIFE si no se estructura de esta manera, no cargan los badges*/}
                    {(()=>{
                        if(status === "Dead"){
                            return (
                                <div className= {`${styles.badge} position-absolute badge bg-danger`}>
                                    {status}
                                </div>
                            );
                        }
                        else if(status === "Alive"){
                            return (
                                <div className= {`${styles.badge} position-absolute badge bg-success`}>
                                    {status}
                                </div>
                            );
                        }
                        else{
                            return (
                                <div className= {`${styles.badge} position-absolute badge bg-secondary`}>
                                    {status}
                                </div>
                            )

                        }
                    })()}
                    
                </div>
                );
            });
        } else {
            display = "No Characters Found :/"
        }
        return <>{display}</>;
    };
    
    export default Cards;
    