import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import IRoute from './configurations/models/IRouter';
import routes from './configurations/router';
import {AppContext} from "./core/context/appContext";
import useIsAuthentication from "./core/hooks/useIsAuthentication";
import useRole from "./core/hooks/useRole";

const App: React.FC = () => {

    const stateAuth = useIsAuthentication();
    const stateRole = useRole();

    const [isAuthenticate, setIsAuthenticate] = useState<boolean>(stateAuth);
    const [roles, setRoles] = useState<string>(stateRole);

    const authenticated = (isAuthenticated: boolean) => setIsAuthenticate(isAuthenticated);
    const role = (role: string) => setRoles(role);

    useEffect(() => {
        authenticated(stateAuth);
        role(stateRole);
    }, [stateAuth, stateRole])

    return (
        <AppContext.Provider
            value={{authenticated: isAuthenticate, setAuthenticated: authenticated, role: roles, setRole: role}}>
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
        </AppContext.Provider>
    );
}

export default App;
