import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { chatsReducer } from "../reducers/chats/addChat";
import { profileReducer } from "../reducers/profile/profileCheck";
import { messagesReducer } from "../reducers/messages/addMessage";
import { botAnswer } from "../middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { gistsReducer } from "../reducers/gists/getGists";
import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../slices/userSlice";
import errorReducers from "../slices/errorSlice";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const rootReducer = combineReducers({
//         chats: chatsReducer,
//         profile: profileReducer,
//         messages: messagesReducer,
//         gists: gistsReducer,
//         user: userReducers,
//         error: errorReducers
//     });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
        gists: gistsReducer,
        user: userReducers,
        error: errorReducers
    }
},
    composeEnhancers(applyMiddleware(botAnswer))
);

// export const persistor = persistStore(store);