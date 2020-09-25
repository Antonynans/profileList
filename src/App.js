import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Notes from './components/notes/Notes'
import UserList from './components/profile/UserList';
import UserProfile from './components/profile/UserProfile';
import Error from './components/profile/404page';

function App() {
    
    return (    

        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Notes} />
                    <Route path="/list" exact component={UserList} />
                    <Route path="/profile" exact component={UserProfile} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    ); 
}

export default App;
