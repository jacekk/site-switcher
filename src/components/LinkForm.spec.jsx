import React from 'react';

import { renderInDiv, mockActions, mount, changeInput } from '../../tests/utils';
import LinkForm from './LinkForm';

const actions = mockActions(
    'onCancel',
    'onSubmitCallback',
);

describe('LinkForm', () => {
    const linkBase = {
        url: 'http://what.ever/example',
        title: 'Original title',
        isActive: true,
        duration: 17,
    };

    it('renders without crashing', () => {
        renderInDiv(<LinkForm
            title="some title"
            link={{}}
            actions={actions}
        />);
    });

    it('toggles is active option', () => {
        const form = mount(<LinkForm
            title="link title"
            link={linkBase}
            actions={actions}
        />);

        expect(form.state().isActive).toBe(true);

        changeInput(form, 'Toggle', false, 'checked');

        expect(form.state().isActive).toBe(false);

        changeInput(form, 'Toggle', true, 'checked');

        expect(form.state().isActive).toBe(true);
    });
});
