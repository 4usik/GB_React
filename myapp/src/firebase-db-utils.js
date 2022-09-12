import { getDatabase, set, remove, ref, onValue } from "firebase/database";

export const writeUserData = (userId, name, email) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        id: userId,
        username: name,
        email: email,
    });
}

export const writeChatData = (chatId, id, userId) => {
    const db = getDatabase();
    set(ref(db, `chats/` + chatId), {
        id: chatId,
        name: 'Chat' + id,
        userId: userId,
    });
}

export const removeChatData = (chatId) => {
    const db = getDatabase();
    remove(ref(db, `chats/` + chatId), {chatId});
}

export const writeMessagesData = (chatId, message, messId, userId) => {
    const db = getDatabase();
    set(ref(db, `chats/${chatId}/messages/` + messId), {
        id: `${chatId}.${messId}`,
        text: message,
        userId: userId,
    });
}

export const setListenerDBUser = () => {
    const db = getDatabase();
    let data;
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}

export const setListenerDBChats = () => {
    const db = getDatabase();
    let data;
    const starCountRef = ref(db, `chats/`);
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}

export const setListenerDBMessages = (chatId) => {
    const db = getDatabase();
    let data;
    const starCountRef = ref(db, `chats/${chatId}/messages/`);
    onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
    });
    return data;
}