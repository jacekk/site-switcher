import React from 'react';
import ReactDOM from 'react-dom';
import theme from '../src/material_ui_raw_theme_file';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const renderInDiv = (component) => ReactDOM.render(
    component,
    document.createElement('div')
);

export const wrap = (component) => {
    return <MuiThemeProvider muiTheme={theme}>
        {component}
    </MuiThemeProvider>;
}

export const mockActions = (...list) => {
    const mocked = {};

    list.forEach((actionName) => {
        mocked[actionName] = (...params) => {
            console.log(`Action '${actionName}' invoked with ${params.length} params.`);
        };
    });

    return mocked;
}
