import React from 'react';
import '../styles/homePage.css';
import guns from '../assets/guns.jpg';
import blackpanter from '../assets/black.jpg';
import ff9 from '../assets/ff9.jpg';
import widow from '../assets/widow.jpeg';
import jumanji from '../assets/jumanji.jpg';
import mov2 from '../assets/mov2.jpg';

export default()=>{
    return(
        <div>
        <div className='homePage'>
        </div>
        <div className='intro'>
            <h1>Welcome to KFTV Movies</h1>
            
            <div className="slider">
            <div className='products'>
                <div className='movie'>
                    <img src={guns} alt='moviePhoto'/>
                </div>
                <div className='movie'>
                    <img src={blackpanter} alt='moviePhoto'/>
                </div>
                <div className='movie'>
                    <img src={ff9} alt='moviePhoto'/>
                </div>
                
                <div className='movie'>
                    <img src={jumanji} alt='moviePhoto'/>
                </div>
                <div className='movie'>
                    <img src={widow} alt='moviePhoto'/>
                </div>
                <div className='movie'>
                    <img src={mov2} alt='moviePhoto'/>
                </div>
           </div>
           
           <h5><b onClick={()=> window.location.assign('/login')}>login</b> to start using our services.</h5>
          </div>
        </div>
        </div>
        )
}