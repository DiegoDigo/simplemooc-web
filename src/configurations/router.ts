import LoginPages from "../pages/LoginPage";
import IRoute from "./models/IRouter";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import DetailMyCoursePage from "../pages/DetailMyCuorsePage";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPages,
        exact: true
    },
    {
        path: '/register',
        name: 'Register Page',
        component: RegisterPage,
        exact: true
    },
    {
        path: '/my',
        name: 'My Course Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/detail/:slug',
        name: 'Detail Page',
        component: DetailPage,
        exact: true
    },
    {
        path: '/detail/my/:slug',
        name: 'Detail My Course Page',
        component: DetailMyCoursePage,
        exact: true
    }
]

export default routes;