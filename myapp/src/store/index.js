import { createStore, combineReducers } from "redux";
import { chatsReducer } from "../components/reducers/chats/addChat";
import { profileReducer } from "../components/reducers/profile/profileCheck";
import { messagesReducer } from "../components/reducers/messages/addMessage";

const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export { store };