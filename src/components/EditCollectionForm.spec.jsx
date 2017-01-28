import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import EditCollectionForm from './EditCollectionForm';

const actions = mockActions('cancel', 'save');

describe('EditCollectionForm', () => {
    it('renders without crashing', () => {
        renderInDiv(<EditCollectionForm
            id="some-id"
            title="some-title"
            actions={actions}
        />);
    });
});
