import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

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

if (localStorage.token) setAuthToken(localStorage?.token);

const App = () => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    axios
      .get(serverRoutes.AUTO_LOGIN)
      .then((res) => {
        console.log(res.data.user);
        setUser(res.data.user);
      })
      .catch((err) => {
        setUser(null);
        console.log(err);
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
                user === undefined ? (
                  <div className="align-loader-center">
                    <div className="loader"></div>
                  </div>
                ) : !user ? (
                  <Auth {...props} />
                ) : user?.admin ? (
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
                user === undefined ? (
                  <div className="align-loader-center">
                    <div className="loader"></div>
                  </div>
                ) : user ? (
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
                user === undefined ? (
                  <div className="align-loader-center">
                    <div className="loader"></div>
                  </div>
                ) : user ? (
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
                user === undefined ? (
                  <div className="align-loader-center">
                    <div className="loader"></div>
                  </div>
                ) : user ? (
                  !user?.alumniId ? (
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
              render={
                (props) =>
                  user === undefined ? (
                    <div className="align-loader-center">
                      <div className="loader"></div>
                    </div>
                  ) : (
                    <AllProfiles {...props} />
                  )
                // : (
                //   <Redirect to={browserRoutes.PROFILE_DETAIL} />
                // )
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
