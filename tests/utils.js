import React from 'react';
import ReactDOM from 'react-dom';
import { mount as enzymeMount } from 'enzyme';
import theme from '../src/material-ui-theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const changeInput = (root, inputWrapperName, newVal, valueKey = 'value') => {
    const element = root.find(inputWrapperName).first();
    changeElementInput(element, newVal, valueKey);
};

export const changeElementInput = (element, newVal, valueKey = 'value') => {
    element
        .find('input')
        .first()
        .simulate('change', {
            target: {
                [valueKey]: newVal,
            },
        });
};

export const clickBtn = (root, inputWrapperName) => {
    clickElementBtn(
        root.find(inputWrapperName).at(1)
    );
};

export const clickElementBtn = (element) => {
    element
        .find('button')
        .first()
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
