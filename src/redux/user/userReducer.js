import {
    ADD_USER,
    DELETE_USER
} from "./userTypes"

const initialState = {
    list: [
        {
            id: 1,
            teamId: 1,
            name: 'Iron Man',
            description: 'Genius. Billionaire. Playboy. Philanthropist. Tony Stark\'s confidence is only matched by his high-flying abilities as the hero called Iron Man.'
        },
        {
            id: 2,
            teamId: 1,
            name: 'Spider-Man',
            description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.'
        },
        {
            id: 3,
            teamId: 2,
            name: 'Batman',
            description: 'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.'
        }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case DELETE_USER:
            return {
                ...state,
                list: [...state.list.filter(ele=> ele.id != action.payload) ]
            };
        default: return state
    }
};

export default reducer
