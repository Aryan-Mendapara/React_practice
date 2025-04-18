import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../action/UserAction";

const initialState = {
    user: [],
    loading: false,
    error: null
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                loading: true

            }
            break;

        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false

            }
            break;
        }
        case GET_USER_FAILURE: {
            return {
                ...state,
                error: action.payload,
                loading: false

            }
        }
        default:
            return state;
    }

}