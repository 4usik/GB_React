import { ADD_MESSAGE } from "../constants/addMessage";
import { addBotMessage } from "../constants/addMessage";
// import { GET_GISTS_SUCCESS } from "../constants/getGists";

export const botAnswer = (store) => (next) => (action) => {

    const res = next(action);
    const chatId = res.chatId;
    let timer;

    if (action.type === ADD_MESSAGE) {
        clearTimeout(timer);
        timer = setTimeout(() => store.dispatch(addBotMessage(chatId)), 500);
    }

    return res;
}