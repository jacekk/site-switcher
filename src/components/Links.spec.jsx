import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import Links from './Links';

const actions = mockActions(
    'editCollection',
    'moveLinkUp',
    'removeLink',
    'removeCollection',
    'toggleEditCollectionDialog',
    'toggleRemoveCollectionDialog'
);

describe('Links', () => {
    it('renders without crashing', () => {
        renderInDiv(<Links
            collection={{}}
            isLeftDrawerOpened={false}
            dialogs={{ isEditCollectionOpen: false, isRemoveCollectionOpen: false }}
            actions={actions}
        />);
    });
});
