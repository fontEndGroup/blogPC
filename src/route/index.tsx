import React from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Store from '../Store';
import { Provider } from 'react-redux';
import routeConfig from './routeConfig';


const BasicRoute = () => (
    <Provider store={Store}>
        <HashRouter>
            <Switch>
                {
                    routeConfig.map(({ View, path }: { View: any, path: string }) => {
                        return <Route exact path={path} component={View}/>
                    })
                }
                <Redirect
                    to={{
                        pathname: "/",
                    }}
                />
            </Switch>
        </HashRouter>
    </Provider>
);


export default BasicRoute;
