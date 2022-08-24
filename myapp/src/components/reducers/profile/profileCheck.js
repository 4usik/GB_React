import { CHECK_ON, CHECK_OFF } from "../../../constants/profileCheck";

const initialState = {
    checkBox: false,
    text: "Off"
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_OFF:
            return { ...state, checkBox: !state.checkBox, text: "Off"};
        case CHECK_ON:
            return { ...state, checkBox: !state.checkBox, text: "On"};
        default:
            return state;
    }
}
