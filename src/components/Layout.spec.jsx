import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import Layout from './Layout';

const actions = mockActions(
    'toggleLeftDrawer',
    'toggleNewCollectionDialog',
    'showCollection',
    'playCollection'
);

describe('Layout', () => {
    it('renders without crashing', () => {
        renderInDiv(<Layout
            collections={{}}
            isLeftDrawerOpened={false}
            dialogs={{ isNewCollectionOpen: false }}
            actions={actions}
        >
            <span />
        </Layout>);
    });
});
