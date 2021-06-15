import * as AT from './actionTypes';

const initialState = {
    fakes: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.GET_FAKES_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        default:
            return state;
    }
};
