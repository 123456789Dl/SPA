import React, {useCallback} from 'react';
import {Autocomplete, Button, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom"
import style from "./AutocompleteComp.module.css"
import { StyledEngineProvider } from '@mui/material/styles';
import debounce from "lodash.debounce"

const AutocompleteComp = (props) => {
    const navigate = useNavigate()
    const completeUserCallback = (value) => {
        props.setPerson(value)
        navigate('/page')
        console.log(`person ${value}`)
    }
    const takePerson = (value) => props.setData(value)

    const debouncedInput = debounce(takePerson,300)
    return (
        <>
            <StyledEngineProvider injectFirst>
            <Autocomplete
                disablePortal
                className={style.autocmp}
                id="combo-box-demo"
                options={props.timeless}
                sx={{ width: 300, margin: '20px'}}
                onInputChange={(ev,value) => debouncedInput(value) }
                onChange={(_, val) => completeUserCallback(val)}
                renderInput={(params) => <TextField {...params} label="Search" />}
            />
            </StyledEngineProvider>
        </>
    );
};

export default AutocompleteComp;