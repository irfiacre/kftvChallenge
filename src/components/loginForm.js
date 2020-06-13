import React, { useState, useEffect } from 'react';
import '../styles/loginForm.css'

export default (props)=>{

    const [formState, setFormSate] = useState({
        email:'',
        password:'',
        error: '',
    });

    useEffect(()=>{
        setFormSate({ ...formState, error:'' });
    },[]);

    const onInputChange = (e)=>{
        const { id, value } = e.target;
        setFormSate({ ...formState, [id]:value, error: ''}); 
    }

    const onFormSubmit = (e) =>{
        e.preventDefault();
        const email = formState.email;
        const password = formState.password;
        
        if(email.match(/\S+@\S+\.\S+/)){
            props.onSubmit({ email, password });
        }else{
            setFormSate({ ...formState, error:'incorrect email format'});
        }
    }
    
    const forgotPassword = ()=> window.location.assign('/reset');

    return(
        <div>
            
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

                        <div className='contentFooter'>
                        <span 
                            id='forgotPassword' 
                            onClick={ forgotPassword }
                        > 
                            Forgot password?
                        </span> 
                            <br/> <br/>
                        <span className='error'>
                            { formState.error ==='You have signed in successfully' ? null : (formState.error) } 
                        </span> 
                        </div>

                    </div> <br/>

                    <div className='form-footer'>
                        <div className="submitBtn">
                            <button 
                                className='btn waves-effect waves-light'
                                id='submit'
                                disabled={ !formState.email || !formState.password }
                            >
                            Login
                                
                    </button>
                </div>
            </div>
    </form>
</div>
    );
};
