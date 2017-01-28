import React from 'react';

import { renderInDiv, mockActions } from '../../tests/utils';
import LinkForm from './LinkForm';

const actions = mockActions(
    'onCancel',
    'onSubmitCallback',
);

describe('LinkForm', () => {
    it('renders without crashing', () => {
        renderInDiv(<LinkForm
            title="some title"
            link={{}}
            actions={actions}
        />);
    });
});
