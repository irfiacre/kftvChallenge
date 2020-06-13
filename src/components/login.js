import React, {useState, useEffect} from 'react';
import '../styles/login.css'
import LoginForm from './loginForm';
import Footer from './footer';
 
export default()=>{
    const [loginState, setLoginState] = useState({
        email:'',
        password:'',
    });
    
    useEffect(()=>{
        console.log(loginState);
        
    },[])
    
    const onFormSubmit = ({ email, password }) =>{
        setLoginState({...loginState, email, password  });
        window.location.assign('/dashboard')
    }
    
    return(
        <div className='loginPage'>
           <div className='main'>
                <div  className='sideContainer'>
                    <div className='background'>
                    </div>

                    <div className='content'>
                    <h2>
                        Welcome aboard dear user.
                    </h2>
                    </div>
                </div>
                
                <div className='formContainer'>
                <div>

                    <h1> Sign in to Kftv Movies </h1>

                        <LoginForm 
                            onSubmit={ onFormSubmit } 
                            testdata='loginForm' 
                        />
                </div>
        </div>
        </div>
        <Footer />
        
        </div>
  )
}

