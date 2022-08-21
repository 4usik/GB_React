import { createStore } from "redux";
import { profileReducer } from "../components/reducers/profile/profileCheck";

const store = createStore(profileReducer);

export { store };