import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import CollectionsMenu from './CollectionsMenu';

const mocks = mockActions('show', 'play', 'newItem');

describe('CollectionsMenu', () => {
    it('renders without crashing', () => {
        renderInDiv(<CollectionsMenu
            items={{}}
            newItem={mocks.newItem}
            show={mocks.show}
            play={mocks.play}
        />);
    });
});
