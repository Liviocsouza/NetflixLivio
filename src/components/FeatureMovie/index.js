import React from 'react';
import './styles.css';

export default ({item})=>{
    return(
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}> 
            <div className="featured--vertical">
                <div className="fetured--horizontal">

                </div>

            </div>
        </section>
    );
}