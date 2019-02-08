import React from 'react';

import { renderInDiv, mount, mockActions } from '../../tests/utils';
import { history } from '../store';
import Home from './Home';

const homePageText = 'There are no collections to play with.';
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

        expect(home.text()).toContain(homePageText);
    })

    it('plays last collection if id passed', () => {
        const lastCollId = 'test-123-xyz';

        history.push = jest.fn();
        mount(<Home
                noCollections={false}
                lastPlayedId={lastCollId}
                actions={actions}
        />);

        expect(history.push).toHaveBeenCalledWith(`/collections/${lastCollId}/play`);
    });
});
