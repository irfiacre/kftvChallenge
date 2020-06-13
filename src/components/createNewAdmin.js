import React, {useState, useEffect} from 'react';
import Footer from './footer';
import Navbar from './navbar';

export default()=>{
    const [formState, setFormSate] = useState({
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        error: '',
    });

    const onInputChange = (e)=>{
        const { id, value } = e.target;
        setFormSate({ ...formState, [id]:value, error: ''}); 
    }

    return(
        <div className='createNewAdmin'>
        <Navbar />
        <div className="pageHeader">
          <div className="contentContainer">
            <h1>Create a New Administator</h1>
            </div>
            <div className="row">
            <form className="col s6">
                    <div className="row">
                        <div className="input-field col s6">
                        <input id="firstName" type="text" className="validate" onChange={onInputChange}/>
                        <label for="firstName">First Name</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                        <input onChange={onInputChange}  id="lastName" type="text" className="validate" />
                        <label for="lastName">Last Name</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                        <input onChange={onInputChange}  id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s6">
                        <input onChange={onInputChange}  id="password" type="password" className="validate" />
                        <label for="password">Last Name</label>
                        </div>
                    </div>
                    <button 
                                className='btn waves-effect waves-light'
                                id='submit'
                                disabled={ !formState.email || !formState.password }
                                onClick={()=>window.location.assign('/dashboard')}
                            >
                                Login
                                
                    </button>
                </form>
                <br />
                </div>
        </div>
        
        <Footer />
        </div>
)
}
