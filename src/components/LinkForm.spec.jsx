import React from 'react';

import { renderInDiv, mockActions, mount, changeInput, changeElementInput, clickElementBtn } from '../../tests/utils';
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
            title="form title"
            link={{}}
            actions={actions}
        />);
    });

    describe('mounted', () => {
        let form;

        const getSaveBtn = () => form.find('RaisedButton').at(1);

        beforeEach(() => {
            form = mount(<LinkForm
                title="form title"
                link={linkBase}
                actions={actions}
            />);
        });

        it('toggles is active option', () => {
            expect(form.state().isActive).toBe(true);

            changeInput(form, 'Toggle', false, 'checked');

            expect(form.state().isActive).toBe(false);

            changeInput(form, 'Toggle', true, 'checked');

            expect(form.state().isActive).toBe(true);
        });

        it('validates required title field', () => {
            expect(getSaveBtn().prop('disabled')).toBe(false);

            changeElementInput(form.ref('title').first(), '');

            expect(getSaveBtn().prop('disabled')).toBe(true);

            changeElementInput(form.ref('title').first(), 'valid title');

            expect(getSaveBtn().prop('disabled')).toBe(false);
        });

        it('validates required url field', () => {
            expect(getSaveBtn().prop('disabled')).toBe(false);

            changeElementInput(form.ref('url').first(), '');

            expect(getSaveBtn().prop('disabled')).toBe(true);

            changeElementInput(form.ref('url').first(), 'non-valid-url');

            expect(getSaveBtn().prop('disabled')).toBe(true);

            changeElementInput(form.ref('url').first(), 'http://valid.url/whatever');

            expect(getSaveBtn().prop('disabled')).toBe(false);
        });

        it('submits form with current inputs', () => {
            actions.onSubmitCallback = jest.fn();

            const newValues = {
                title: 'new valid title',
                url: 'http://valid.url/whatever',
                duration: 66,
                isActive: false,
            };

            changeElementInput(form.ref('url').first(), newValues.url);
            changeElementInput(form.ref('title').first(), newValues.title);
            changeElementInput(form.ref('duration').first(), newValues.duration.toString());
            changeInput(form, 'Toggle', newValues.isActive, 'checked');

            expect(actions.onSubmitCallback).not.toHaveBeenCalled();

            clickElementBtn(getSaveBtn());

            expect(actions.onSubmitCallback).toHaveBeenCalledWith(newValues);
        });
    });
});
