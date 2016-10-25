import { ADD_NEW_COLLECTION, MOVE_COLLECTION_LINK_UP } from '../constants/action-types';
import uuid from 'uuid';

const EXAMPLE_UUID = '45ce39d5-b91c-4d50-89ab-22bd9757e903';

const initialState = {
    [EXAMPLE_UUID]: {
        id: EXAMPLE_UUID,
        title: 'Example collection',
        links: [
            {
                title: 'GitHub status page',
                url: 'https://status.github.com/',
                isActive: true,
                duration: 7,
            },
            {
                title: 'FB status page',
                url: 'https://developers.facebook.com/status/',
                isActive: false,
                duration: 3,
            },
            {
                title: 'Example',
                url: 'http://example.com',
                isActive: true,
                duration: 5,
            },
        ],
    },
};

const moveArrayItems = (arr, from, to) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}

const collections = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_COLLECTION: {
            return Object.assign({}, state, {
                [action.id]: {
                    id: action.id,
                    title: action.title,
                    links: [],
                },
            });
        }
        case MOVE_COLLECTION_LINK_UP: {
            if (action.index < 1) {
                return state;
            }

            const collection = Object.assign({}, state[action.id]);
            const newLinks = state[action.id].links.slice();
            moveArrayItems(newLinks, action.index, action.index - 1);
            collection.links = newLinks;

            return Object.assign({}, state, {
                [action.id]: collection,
            });
        }
    }

    return state;
}

export default collections;
