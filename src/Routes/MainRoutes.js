import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// imoprt components
import Gent from '../components/Gent'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Routes */}
                <Route path="/Gent" component={Gent} />
                {/* REDIRECT */}
                <Redirect to="/Gent" />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoutes
