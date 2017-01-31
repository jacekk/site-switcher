import React from 'react';

import { renderInDiv, mockActions, mount } from '../../tests/utils';
import CollectionsMenu from './CollectionsMenu';

const actions = mockActions('show', 'play', 'newItem');

const itemsMock = {
    id1: {
        id: 'id1',
        title: 'some title 11',
    },
    id2: {
        id: 'id2',
        title: 'some title 22',
        links: [
            {
                isActive: true,
            },
            {
                isActive: false,
            },
        ],
    },
};

describe('CollectionsMenu', () => {
    it('renders without crashing', () => {
        renderInDiv(<CollectionsMenu
            items={{}}
            newItem={actions.newItem}
            show={actions.show}
            play={actions.play}
        />);
    });

    it('renders all passed items as cards', () => {
        const menu = mount(<CollectionsMenu
            items={itemsMock}
            newItem={actions.newItem}
            show={actions.show}
            play={actions.play}
        />);

        const titles = menu.find('CardTitle');
        const second = titles.at(1);

        expect(titles.length).toEqual(2);
        expect(second.prop('title')).toEqual(itemsMock.id2.title);
        expect(second.prop('subtitle')).toEqual('links count: 2 | active: 1');
    });
});
