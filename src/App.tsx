import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { RegistrationPage } from "./pages/registration";
import { LoginPage } from "./pages/login";
import { NAVIGATION_ROUTES } from "./navigation";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={NAVIGATION_ROUTES.Register}>
          <RegistrationPage />
        </Route>
        <Route exact path={NAVIGATION_ROUTES.Login}>
          <LoginPage />
        </Route>
        <Route exact path={NAVIGATION_ROUTES.Home}>
          <Home />
        </Route>
        <Route exact path={NAVIGATION_ROUTES.Base}>
          <Redirect to={NAVIGATION_ROUTES.Login} />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
