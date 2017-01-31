import React from 'react';

import { renderInDiv, mockActions, mount, changeInput, clickBtn } from '../../tests/utils';
import EditCollectionForm from './EditCollectionForm';


describe('EditCollectionForm', () => {
    const collectionId = 'some-id-123x';
    let actions;

    beforeEach(() => {
        actions = mockActions('cancel', 'save');
    });

    it('renders without crashing', () => {
        renderInDiv(<EditCollectionForm
            id={collectionId}
            title="some-title"
            actions={actions}
        />);
    });

    it('renders all passed items as cards', () => {
        const titleNewVal = 'changed title';

        actions.save = jest.fn();

        const form = mount(<EditCollectionForm
            id={collectionId}
            title="title before change"
            actions={actions}
        />);

        changeInput(form, 'TextField', titleNewVal);

        expect(form.state('title')).toEqual(titleNewVal);
        expect(actions.save).not.toHaveBeenCalled();

        clickBtn(form, 'RaisedButton');

        expect(actions.save).toHaveBeenCalledWith(titleNewVal, collectionId);
    });

    it('disables save if value is empty', () => {
        const form = mount(<EditCollectionForm
            id={collectionId}
            title="title before change"
            actions={actions}
        />);

        expect(form.state('saveDisabled')).toEqual(false);

        changeInput(form, 'TextField', '');

        expect(form.state('saveDisabled')).toEqual(true);

        changeInput(form, 'TextField', 'anything valid');

        expect(form.state('saveDisabled')).toEqual(false);
    });
});
