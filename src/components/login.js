import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/login.css'
import LoginForm from './loginForm';
import Footer from './footer';
import { onUserLogin } from '../redux/actions/actions';

 
export default()=>{
    const loginStore = useSelector(store=> store.loginData);
    
    const dispatch = useDispatch();
    
    const [loginState, setLoginState] = useState({
        email:'',
        password:'',
    });
    
    
    const onFormSubmit = ({ email, password }) =>{
        setLoginState({...loginState, email, password  });     
        dispatch(onUserLogin({email, password})); 
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

