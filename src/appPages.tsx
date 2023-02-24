import { mailOutline, mailSharp } from 'ionicons/icons';

import Home from './pages/home';
import Login from './pages/login';
import Settings from './pages/settings';


interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    element: any
}


const appPages: AppPage[] = [
    {
        title: 'Login',
        url: '/page/login',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
        element: <Login />
    },
    {
        title: 'Home',
        url: '/page/home',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
        element: <Home />
    },
    {
        title: 'Configurações',
        url: '/page/settings',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
        element: <Settings />
    },
];

export default appPages