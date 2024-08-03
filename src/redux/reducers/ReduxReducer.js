import * as actionTypes from "../actionTypes/ActionType";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default reducer;