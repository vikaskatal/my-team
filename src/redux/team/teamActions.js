import {
    ADD_TEAM,
    ACTIVE_TEAM
} from "./teamTypes";

export const addTeam = teamData => {
    let data = teamData;
    return {
        type: ADD_TEAM,
        payload: data
    }
};

export const selectTeam = teamId => {
    return {
        type: ACTIVE_TEAM,
        payload: teamId
    }
};
