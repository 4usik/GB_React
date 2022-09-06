import { getDatabase, set, ref, onValue } from "firebase/database";

export const writeMessagesData = (messagesList) => {
    const db = getDatabase();
    set(ref(db, 'messages/'), {...messagesList});
}

export const writeChatData = (chats, messagesList) => {
    const db = getDatabase();
    set(ref(db, 'chats/'), {...chats});
    set(ref(db, 'messages/'), {...messagesList});
}

export const writeUserData = (userId, name, email) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });
}

export const setListenerDB = (id = '') => {
    const db = getDatabase();
    const starCountRef = ref(db, 'chats/' + id);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}