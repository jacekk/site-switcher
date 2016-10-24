import { ADD_NEW_COLLECTION } from '../constants/action-types';
import uuid from 'uuid';

const initialState = [
    {
        id: uuid.v4(),
        title: 'Example collections',
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
];

const collections = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_COLLECTION:
            const newCollection = {
                id: action.id,
                title: action.title,
                links: [],
            }; 
            return state.concat([ newCollection ]);
    }

    return state;
}

export default collections; 