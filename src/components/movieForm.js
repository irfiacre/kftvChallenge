import React from 'react';
import '../styles/createMovie.css';

export default()=>{
    return(
        <div className='movieForm'>
              <div className="row">
              
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                        <input placeholder="Movie title" id="title" type="text" className="validate" />
                        <label for="title">Title</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                        <input placeholder="Movie price: Rwf" id="price" type="text" className="validate" />
                        <label for="price">Price</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                        <textarea placeholder="Add a description" id="description" className="materialize-textarea"></textarea>
                        <label for="description">Description</label>
                        </div>
                    </div>
                    <div className="submitBtn">
                            <button 
                                className='btn waves-effect waves-light'
                                id='submit'
                            >
                            Submit    
                    </button>
                </div>
                </form>
                
        </div>
        </div>
        )
}