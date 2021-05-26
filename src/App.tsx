import React from 'react';
import {BrowserRouter, Switch, Route, RouteComponentProps} from 'react-router-dom';
import Navbar from './components/Navbar';
import IRoute from './configurations/models/IRouter';
import routes from './configurations/router';

const App: React.FC = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar/>
                <Switch>
                    {routes.map((route: IRoute, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props: RouteComponentProps<any>) => (
                                        <route.component name={route.name} {...props} {...route.props} />
                                    )}
                                />
                            )
                        }
                    )}
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
