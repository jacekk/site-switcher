import React from 'react';
import ReactDOM from 'react-dom';
import { mount as enzymeMount } from 'enzyme';
import theme from '../src/material_ui_raw_theme_file';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const mount = (component) => enzymeMount(wrapWithTheme(component));

export const renderInDiv = (component) => ReactDOM.render(
    wrapWithTheme(component),
    document.createElement('div')
);

export const wrapWithTheme = (component) => {
    return <MuiThemeProvider muiTheme={theme}>
        {component}
    </MuiThemeProvider>;
}

export const mockActions = (...list) => {
    const mocked = {};

    list.forEach((actionName) => {
        mocked[actionName] = (...params) => {
            // console.log(`Action '${actionName}' invoked with ${params.length} params.`);
        };
    });

    return mocked;
}
