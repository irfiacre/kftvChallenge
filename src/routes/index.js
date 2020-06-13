import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from '../components/home';
import dashboard from '../components/dashboard';
import newAdmin from '../components/createNewAdmin';
import newMovie from '../components/createMovie';
import login from '../components/login';
import reset from '../components/reset';

const AppRouter =()=>(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={home} exact = { true }/>
                    <Route path="/dashboard" component={dashboard} />
                    <Route path="/create" component={newAdmin} />
                    <Route path="/movie" component={newMovie} />
                    <Route path="/login" component={login} />
                    <Route path="/reset" component={reset} />
                </Switch> 
            </div>
        </BrowserRouter>
    );

export default AppRouter;
