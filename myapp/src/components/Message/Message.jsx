import React from 'react';
import { useSelector } from 'react-redux';
import '../../components/style.css';
import { AUTHOR, BOT } from '../../constants';
import { getUserName } from '../../store/selectors/profile';

export const Message = ({ author, text }) => {
    // const userName = useSelector(getUserName);
    const authorType = author === AUTHOR ? AUTHOR : BOT;
    
    return (
        <div className={ `message ${authorType}` }>
            <span>{author}</span>
            <span>{text}</span>
        </div>
    );
}