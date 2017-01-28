import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import Player from './Player';

const actions = mockActions(
    'collectionStartedPlaying',
    'playNextLink',
);

describe('Player', () => {
    it('renders without crashing', () => {
        renderInDiv(<Player
            nextLinkId={1}
            currLinkId={2}
            link={{}}
            actions={actions}
        />);
    });
});
