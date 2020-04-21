import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon';
import Register from './pages/Register'


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/"exact component={Logon} />
            <Route path="/register" component={Register} />
        </Switch>
        </BrowserRouter>
    )
}

// utilizamos o exact para indicar qual será o caminho exato
// da página inicial se não o react interpreta sempre  começo que seria as barras
