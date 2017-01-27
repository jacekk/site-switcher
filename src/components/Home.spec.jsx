import React from 'react';

import { wrap, renderInDiv, mockActions } from '../../tests/utils';
import Home from './Home';

const actions = mockActions('newCollectionDialog');

describe('Home', () => {
    it('renders without crashing', () => {
        renderInDiv(wrap(<Home
                noCollections={true}
                actions={actions}
        />));
    });
});
