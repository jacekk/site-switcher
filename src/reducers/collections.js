import * as types from '../constants/action-types';
import SAMPLE_LINKS from '../constants/sample-links';
import uuid from 'uuid';

const EXAMPLE_UUID = '45ce39d5-b91c-4d50-89ab-22bd9757e903';

const initialState = {
    [EXAMPLE_UUID]: {
        id: EXAMPLE_UUID,
        title: 'Weather collection',
        links: SAMPLE_LINKS,
    },
};

const moveArrayItems = (arr, from, to) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
}

const collections = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NEW_COLLECTION: {
            return Object.assign({}, state, {
                [action.id]: {
                    id: action.id,
                    title: action.title,
                    links: [],
                },
            });
        }
        case types.SAVE_COLLECTION_TITLE: {
            const id = action.collectionId;
            const collection = Object.assign({}, state[id]);
            collection.title = action.title;

            return Object.assign({}, state, {
                [id]: collection,
            });
        }
        case types.REMOVE_COLLECTION: {
            let newState = Object.assign({}, state);
            delete newState[action.collectionId];

            return newState
        }
        case types.MOVE_COLLECTION_LINK_UP: {
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
        case types.ADD_NEW_COLLECTION_LINK: {
            const id = action.collectionId;
            const collection = Object.assign({}, state[id]);
            collection.links.push(action.payload);

            return Object.assign({}, state, {
                [id]: collection,
            });
        }
        case types.SAVE_COLLECTION_LINK: {
            const id = action.collectionId;
            const collection = Object.assign({}, state[id]);
            collection.links[action.linkId] = action.payload;

            return Object.assign({}, state, {
                [id]: collection,
            });
        }
        case types.REMOVE_COLLECTION_LINK: {
            const id = action.collectionId;
            const collection = Object.assign({}, state[id]);
            collection.links.splice(action.linkId, 1);

            return Object.assign({}, state, {
                [id]: collection,
            });
        }
    }

    return state;
}

export default collections;
