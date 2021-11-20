import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Theme from "./UI/Theme"
import { Login } from "./Pages/Login"
import { Home } from "./Pages/Home.js"
import { Movies } from "./Pages/Movies.js"
import { Error } from "./Pages/Error.js"
import { SingleMovie } from "./Pages/SingleMovie.js"
import { SingleShows } from "./Pages/SingleShows.js"
import ScrollToTop from "./components/ScrollToTop"

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
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/movies">
                <Movies />
              </Route>
              <Route exact path="/shows">
                <Shows />
              </Route>
              <Route exact path="/shows/:id">
                <SingleShows />
              </Route>
              <Route exact path="/movies/:id">
                <SingleMovie />
              </Route>
              <Route exact path="/*">
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
