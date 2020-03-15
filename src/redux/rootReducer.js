import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import teamReducer from './team/teamReducer'

const rootReducer = combineReducers({
    users: userReducer,
    teams: teamReducer
});

export default rootReducer
