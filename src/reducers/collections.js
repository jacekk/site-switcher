const initialState = [
    {
        id: 'abc-1',
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
    { id: 'abc-2', title: 'Empty collection #2', links: [] },
    { id: 'abc-3', title: 'Empty collection #3', links: [] },
    { id: 'abc-4', title: 'Empty collection #3', links: [] },
    { id: 'abc-5', title: 'Empty collection #5', links: [] },
    { id: 'abc-6', title: 'Empty collection #6', links: [] },
    { id: 'abc-7', title: 'Empty collection #7', links: [] },
    { id: 'abc-8', title: 'Empty collection #8', links: [] },
    { id: 'abc-9', title: 'Empty collection #9', links: [] },
    { id: 'abc-10', title: 'Empty collection #10', links: [] },
    { id: 'abc-11', title: 'Empty collection #11', links: [] },
];

const collections = (state = initialState, action) => {
    switch (action.type) {
    }

    return state;
}

export default collections; 