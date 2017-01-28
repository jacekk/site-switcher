import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import TableOfLinks from './TableOfLinks';

const actions = mockActions(
    'goTo',
    'moveUp',
    'remove',
);

describe('TableOfLinks', () => {
    it('renders without crashing', () => {
        renderInDiv(<TableOfLinks
            links={[]}
            goTo={actions.goTo}
            moveUp={actions.moveUp}
            remove={actions.remove}
        />);
    });
});
