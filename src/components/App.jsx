import AppLayout from '../containers/AppLayout';
import HomePage from '../containers/HomePage';
import LinkEditContainer from '../containers/LinkEditContainer';
import LinksPage from '../containers/LinksPage';
import NewLinkContainer from '../containers/NewLinkContainer';
import PlayerPage from '../containers/PlayerPage';
import theme from '../material_ui_raw_theme_file';
import { history } from '../store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Component } from 'react';
import { IndexRoute, Route, Router } from 'react-router';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Router history={history}>
                    <Route path="/" component={AppLayout}>
                        <IndexRoute component={HomePage} />
                        <Route path="collections/:collectionId/play" component={PlayerPage} />
                        <Route path="collections/:collectionId" component={LinksPage}>
                            <Route path="link" component={NewLinkContainer} />
                            <Route path="link/:linkId" component={LinkEditContainer} />
                        </Route>
                    </Route>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;