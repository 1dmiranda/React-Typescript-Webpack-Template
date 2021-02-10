import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'


const App: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;