import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { chatsReducer } from "../reducers/chats/addChat";
import { profileReducer } from "../reducers/profile/profileCheck";
import { messagesReducer } from "../reducers/messages/addMessage";
import { botAnswer } from "../middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(botAnswer))
    );

export const persistor = persistStore(store);