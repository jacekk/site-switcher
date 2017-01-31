import React from 'react';
import ReactDOM from 'react-dom';
import { mount as enzymeMount } from 'enzyme';
import theme from '../src/material-ui-theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const changeInput = (root, inputWrapperName, newVal) => {
    root
        .find(inputWrapperName).first()
        .find('input').first()
        .simulate('change', { target: { value: newVal } });
};

export const clickBtn = (root, inputWrapperName) => {
    root
        .find(inputWrapperName).at(1)
        .find('button').first()
        .simulate('click');
};

export const mount = (component) => enzymeMount(
    component,
    {
        context: {
            muiTheme: getMuiTheme(theme),
        },
        childContextTypes: {
            muiTheme: React.PropTypes.object.isRequired,
        },
    },
);

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
