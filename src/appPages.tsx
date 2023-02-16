import { mailOutline, mailSharp } from 'ionicons/icons';

import Home from './pages/home';


interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    element: any
}


const appPages: AppPage[] = [
    {
        title: 'Home',
        url: '/page/home',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
        element: <Home />
    },
];

export default appPages