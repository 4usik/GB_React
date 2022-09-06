import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";


export const fetchUserRegistration = async ({ email, password }) => {
    /* console.log("process.env.REACT_APP_APIKEY", process.env.REACT_APP_APIKEY);
    console.log(process.env); */
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export const fetchUserLogin = async (email, password) => {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}