import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home/index';
import LendersMap from '../Pages/LendersMap/index';
import CreateLender from '../Pages/CreateLender/index';
import ProfileLender from '../Pages/LenderProfile/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/app" component={LendersMap} />

                <Route  path="/lender/create" component={CreateLender} />
                <Route  path="/profile/:id" component={ProfileLender} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;