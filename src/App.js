import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Theme from "./UI/Theme"
import { Login } from "./Pages/Login"
import { Movies } from "./Pages/Movies.js"
import { Error } from "./Pages/Error.js"
import { SingleMovie } from "./Pages/SingleMovie.js"
import { SingleShows } from "./Pages/SingleShows.js"
import ScrollToTop from "./components/ScrollToTop"
import PrivateRoute from "./components/PrivateRoute"
import { Shows } from "./Pages/Shows.js"
import { AuthWrapper } from "./components/AuthWrapper"
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthWrapper>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <PrivateRoute exact path="/movies">
                <Movies />
              </PrivateRoute>
              <PrivateRoute exact path="/shows">
                <Shows />
              </PrivateRoute>
              <PrivateRoute exact path="/shows/:id">
                <SingleShows />
              </PrivateRoute>
              <PrivateRoute exact path="/movies/:id">
                <SingleMovie />
              </PrivateRoute>
              <Route>
                <Error />
              </Route>
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </AuthWrapper>
    </ThemeProvider>
  );
}

export default App;
