import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from '../components/home';
import login from '../components/login';
import reset from '../components/reset';

const AppRouter =()=>(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={home} exact = { true }/>
                    <Route path="/login" component={login} />
                    <Route path="/reset" component={reset} />
                </Switch> 
            </div>
        </BrowserRouter>
    );

export default AppRouter;
