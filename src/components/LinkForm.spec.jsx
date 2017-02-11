import React from 'react';

import { renderInDiv, mockActions, mount, changeInput, changeElementInput } from '../../tests/utils';
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

    const getSaveBtn = (form) => form.find('RaisedButton').at(1);

    it('renders without crashing', () => {
        renderInDiv(<LinkForm
            title="form title"
            link={{}}
            actions={actions}
        />);
    });

    it('toggles is active option', () => {
        const form = mount(<LinkForm
            title="form title"
            link={linkBase}
            actions={actions}
        />);

        expect(form.state().isActive).toBe(true);

        changeInput(form, 'Toggle', false, 'checked');

        expect(form.state().isActive).toBe(false);

        changeInput(form, 'Toggle', true, 'checked');

        expect(form.state().isActive).toBe(true);
    });

    it('validates required title field', () => {
        const form = mount(<LinkForm
            title="form title"
            link={linkBase}
            actions={actions}
        />);

        expect(getSaveBtn(form).prop('disabled')).toBe(false);

        changeElementInput(form.ref('title').first(), ''),

        expect(getSaveBtn(form).prop('disabled')).toBe(true);

        changeElementInput(form.ref('title').first(), 'valid title'),

        expect(getSaveBtn(form).prop('disabled')).toBe(false);
    });
});
