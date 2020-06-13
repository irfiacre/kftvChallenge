import React from 'react';
import MovieForm from './movieForm';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/createMovie.css'
export default ()=>{
 
  
    return(
      <div className='addMovie'>
            <Navbar />
         <div className='movie'>
          <div className="title">
            <h1 >Add Movie</h1>
        </div>
        <div className="body">
            <MovieForm  />
        </div>
        <div className='footer'>
            <Footer />
        </div>
        </div>
      </div>
    );
}
