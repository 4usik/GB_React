import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from '@mui/material';
import { CheckBox } from "../components/ProfileChecked";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../constants/profileCheck";
import { getProfile } from "../store/selectors/profile";
import { getUser } from "../store/selectors/users";
import { writeUserData } from "../firebase-db-utils";

export const Profile = () => {

    const dispatch = useDispatch();
    const profile = useSelector(getProfile);
    const user = useSelector(getUser);
    console.log(user);
    
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const onAddName = () => {
        dispatch(addName(name));
        writeUserData(user.uid, name, user.email);
        setName('');
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [name]);

    return (
        <Box sx={{ minWidth: 360, position: 'absolute', top: '25%', left: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#1976d2'  }}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            {profile.name}
            </Typography>
            <TextField
                sx={{
                    '& > :not(style)': { m: 1, width: '49ch', color: 'white', fontSize: '25px', textAlign: 'left' },  
                }}
                label="Введите имя"
                value={name}
                onChange={handleChange}
            />
            <Button onClick={onAddName}
                sx={{
                    color: 'white',
                    fontSize: '25px'
                }}
                >
                    СОХРАНИТЬ
                </Button>
            <CheckBox />
        </Box>
    );
}