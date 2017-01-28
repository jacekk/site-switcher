import React from 'react';

import { renderInDiv, mount, mockActions } from '../../tests/utils';
import Home from './Home';

const actions = mockActions('newCollectionDialog');

describe('Home', () => {
    it('renders without crashing', () => {
        renderInDiv(<Home
                noCollections={true}
                actions={actions}
        />);
    });

    it('renders message if there are no collections', () => {
        const home = mount(<Home
                noCollections={true}
                actions={actions}
        />);

        expect(home.text()).toContain('There are no collections to play with.');
    })
});
