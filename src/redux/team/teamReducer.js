import {
    ADD_TEAM,
    ACTIVE_TEAM
} from "./teamTypes";

const initialState = {
    list: [
        { id: 1, name: 'Avengers' },
        { id: 2, name: 'Justice League'}
    ],
    activeTeam: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEAM:
            return {
                ...state,
                list: [...state.list, action.payload],

            };
        case ACTIVE_TEAM:
            return {
                ...state,
                activeTeam: action.payload
            };
        default: return state
    }
}

export default reducer
