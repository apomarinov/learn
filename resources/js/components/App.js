import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./Home";
import {createMuiTheme} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import {ThemeProvider} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as history} from 'history';
import Collection from "./Collection";
import Book from "./Book";
import Lesson from "./Lesson";
import {Provider} from 'react-redux'
import store from "../store"

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
    },
});


function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container disableGutters={true}>
                    <Router history={history()}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/collection/:collection/book/:book/lesson/:lesson" component={Lesson} />
                            <Route path="/collection/:collection/book/:book" component={Book} />
                            <Route path="/collection/:collection" component={Collection} />
                        </Switch>
                    </Router>
                </Container>
            </ThemeProvider>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
