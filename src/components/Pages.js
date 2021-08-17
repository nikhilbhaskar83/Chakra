import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import MyTeam from './MyTeam';
import NotFound from './NotFound';


function Pages() {

    return (
        <div >
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/team" exact component={MyTeam} />
                <Route path="*" exact component={NotFound} />
            </Switch>
        </div>
    )
}

export default Pages
