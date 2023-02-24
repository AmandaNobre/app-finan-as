import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';
import appPages from './appPages';
import { UserProvider } from './context/UserContext';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <UserProvider>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/page/login" />
              </Route>
              {appPages.map((page, index) => (
                <Route
                  key={index}
                  exact
                  path={page.url}
                  render={(props) => {
                    return page.element;
                  }}
                />
              ))}
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </UserProvider>
    </IonApp>
  );
};

export default App;
