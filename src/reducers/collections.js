const initialState = [
    {
        title: 'Some collections #1',
        links: [
            {
                title: 'First url',
                url: 'http://example.com',
                isActive: true,
                duration: 15,
            },
            {
                title: 'Second url - UA',
                url: 'http://ua.kapias.net',
                isActive: true,
                duration: 10,
            },
        ],
    },
];

const collections = (state = initialState, action) => {
    switch (action.type) {
    }

    return state;
}

export default collections; 