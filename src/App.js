import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AllProfiles from "./Components/AllProfiles/AllProfiles";
import Auth from "./Components/Auth/Auth";
import CreateProfile from "./Components/CreateProfile/CreateProfile";
import EditProfileUser from "./Components/EditProfileUser/EditProfile";
import ProfileDetail from "./Components/ProfileDetail/ProfileDetail";

import setAuthToken from "./utils/setAuthToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import browserRoutes from "./Routes/browserRoutes";
import serverRoutes from "./Routes/serverRoutes";

export const UserContext = React.createContext();

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(serverRoutes.AUTO_LOGIN)
      .then((res) => setUser(res.data.user))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <ToastContainer />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={browserRoutes.AUTH}
              render={(props) =>
                !localStorage.getItem("token") ? (
                  <Auth {...props} />
                ) : JSON.parse(localStorage.getItem("user"))?.admin ? (
                  <Redirect to={browserRoutes.ALL_PROFILES} />
                ) : (
                  <Redirect to={browserRoutes.PROFILE_DETAIL} />
                )
              }
            />

            <Route
              exact
              path={browserRoutes.EDIT_PROFILE}
              render={(props) =>
                localStorage.getItem("token") ? (
                  <EditProfileUser {...props} />
                ) : (
                  <Redirect to={browserRoutes.AUTH} />
                )
              }
            />
            <Route
              exact
              path={browserRoutes.PROFILE_DETAIL}
              render={(props) =>
                localStorage.getItem("token") ? (
                  <ProfileDetail {...props} />
                ) : (
                  <Redirect to={browserRoutes.AUTH} />
                )
              }
            />
            <Route
              exact
              path={browserRoutes.CREATE_PROFILES}
              render={(props) =>
                localStorage.getItem("token") ? (
                  !JSON.parse(localStorage.getItem("user"))?.alumniId ? (
                    <CreateProfile {...props} />
                  ) : (
                    <Redirect to={browserRoutes.PROFILE_DETAIL} />
                  )
                ) : (
                  <Redirect to={browserRoutes.AUTH} />
                )
              }
            />

            <Route
              exact
              path={browserRoutes.ALL_PROFILES}
              render={(props) =>
                JSON.parse(localStorage.getItem("user"))?.admin ? (
                  <AllProfiles {...props} />
                ) : (
                  <Redirect to={browserRoutes.PROFILE_DETAIL} />
                )
              }
            />

            <Redirect from="/" to={browserRoutes.PROFILE_DETAIL} />

            {/* <HomeRoute path={`/`} component={PageNotFound} /> */}
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default App;
