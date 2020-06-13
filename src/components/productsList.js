import React from 'react';
import '../styles/list.css';
import guns from '../assets/guns.jpg'
import blackpanter from '../assets/black.jpg'
import ff9 from '../assets/ff9.jpg'

export default()=>{
    return(
        <div className='productList'>
           <h3>New movies out</h3>
           <div className='products'>
                <div className='product'>
                    <img src={guns} alt='moviePhoto'/>
                </div>
                <div className='product'>
                    <img src={blackpanter} alt='moviePhoto'/>
                </div>
                <div className='product'>
                    <img src={ff9} alt='moviePhoto'/>
                </div>
           </div>
        </div>
)
}
