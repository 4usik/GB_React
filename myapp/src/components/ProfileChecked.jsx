import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkOn, checkOff } from "../constants/profileCheck";

export const CheckBox  = () => {

    const dispatch = useDispatch();
    const checkBox = useSelector((state) => state.profile.checkBox);
    const text = useSelector((state) => state.profile.text);

    const handleChange = () => {
        checkBox ? dispatch(checkOff) : dispatch(checkOn);
    };

    return (
        <>
            <input type={'checkbox'} className="checkbox" checked={checkBox} value={checkBox} onChange={handleChange} />
            <div>{text}</div>
        </>
    )
}