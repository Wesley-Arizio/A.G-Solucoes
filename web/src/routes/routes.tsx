import React, { useEffect }from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '../Context/context';

import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import LendersMap from '../Pages/LendersMap/index';
import CreateLender from '../Pages/CreateLender/index';
import ProfileLender from '../Pages/LenderProfile/index';

const Routes = () => {
    const { authenticated, loading } = useAuthContext();
    
    function CustomRoute({isPrivate, ...rest}: any){

        if(loading) {
            return <h1>Loading...</h1>
        }

        if(isPrivate && !authenticated ){
            return <Redirect to="/auth"/>
        }

        return <Route {...rest} />
    }

    return (
            <Switch>
                <CustomRoute exact path="/" component={Home} />
                <CustomRoute  path="/auth" component={Login}/>

                {/* Private */}
                <CustomRoute isPrivate path="/app" component={LendersMap} />
                <CustomRoute isPrivate path="/lender/create" component={CreateLender} />
                <CustomRoute isPrivate path="/profile/:id" component={ProfileLender} />
            </Switch>
    )
}

export default Routes;