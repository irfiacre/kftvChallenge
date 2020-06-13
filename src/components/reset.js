import React, { useState } from 'react';
import '../styles/layout.css';
import '../styles/reset.css';
import Footer from './footer';

export default ()=>{
    const[resetState, setResetState] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        error:'',
    });
    
    const onInputChange = (e)=>{
        const { id, value } = e.target;
        setResetState({ ...resetState, [id]:value, error: ''}); 
    }
    
    const onFormSubmit=(e)=>{
        e.preventDefault();
        
        const password = resetState.password;
        const confirmPassword = resetState.confirmPassword;
        
        if(password === confirmPassword){
            window.location.assign('/login')
        }else{
            setResetState({ ...resetState, error:'Passwords do not match please check again'});
        }
    }
    
    
    
  return ( 
        <div className='reset'>
        
          <div className='page'>
          <div className='pageHeader'>
            <h2> Reset The Password </h2>
          </div>
      
        <div className='pageBody'>
        <form 
                onSubmit={ onFormSubmit } 
                className='col s12' 
                testdata="form"
            >
                    <div className='form-content'>

                        <div className='row' id='textInput'>
                            <div className='input-field col s12'>
                                <input 
                                    name = 'Email'
                                    id='email' 
                                    type='email' 
                                    className='validate'
                                    onChange={ onInputChange } 
                                    testdata="inputChange"
                                />
                                <label htmlFor='email'>Email</label>
                            </div>
                        </div>

                        <div className='row' id='textInput'>
                            <div className='input-field col s12'>
                                <input 
                                    name='Password'
                                    id='password' 
                                    type='password' 
                                    className='validate'
                                    onChange={ onInputChange }
                                />
                                <label htmlFor='password'>Password</label>
                            </div>
                        </div>
                        
                        <div className='row' id='textInput'>
                            <div className='input-field col s12'>
                                <input 
                                    name='confirmPassword'
                                    id='confirmPassword' 
                                    type='password' 
                                    className='validate'
                                    onChange={ onInputChange }
                                />
                                <label htmlFor='password'>Confirm Password</label>
                            </div>
                        </div>

                        <div className='contentFooter'>
                        <span className='error'>
                            { resetState.error && resetState.error } 
                        </span> 
                        </div>

                    </div> <br/>

                    <div className='form-footer'>
                        <div className="submitBtn">
                            <button 
                                className='btn waves-effect waves-light'
                                id='submit'
                                disabled={ !resetState.email || !resetState.password || !resetState.confirmPassword }
                            >
                            Submit
                                
                    </button>
                </div>  
                </div>
      </form>
      </div>
      <div className='pageFooter'>
        <Footer />
      </div>
      </div>
    </div>
);
};