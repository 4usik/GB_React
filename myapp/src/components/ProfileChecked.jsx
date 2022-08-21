import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHECKON_ACTION, CHECKOFF_ACTION } from "../constants/profileCheck";

export const CheckBox  = () => {

    const dispatch = useDispatch();
    const checkOn = useSelector((state) => state.checkOn);
    const text = useSelector((state) => state.text);

    const handleChange = () => {
        checkOn ? dispatch({ type: CHECKOFF_ACTION}) : dispatch({ type: CHECKON_ACTION});
    };

    return (
        <>
            <input type={'checkbox'} className="checkbox" checked={checkOn} value={checkOn} onChange={handleChange} />
            <div>{text}</div>
        </>
    )
}