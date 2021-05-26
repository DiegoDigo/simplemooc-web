import LoginPages from "../pages/LoginPage";
import IRoute from "./models/IRouter";
import HomePage from "../pages/HomePage";

const routes: IRoute[] = [
    {
        path: '/',
        name :'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/login',
        name :'Login Page',
        component: LoginPages,
        exact: true
    }
]

export default routes;