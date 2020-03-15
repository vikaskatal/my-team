import {
    ADD_USER,
    DELETE_USER
} from "./userTypes"


export const addUser = users => {
    return {
        type: ADD_USER,
        payload: users
    }
}

export const deleteUser = usersId => {
    return {
        type: DELETE_USER,
        payload: usersId
    }
}

