import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom"
import style from "../Style/AutocompleteComp.module.css"
import debounce from "lodash.debounce"

const AutocompleteComp = ({setPerson, setData, timeless}) => {
    const navigate = useNavigate()
    const completeUser = (value) => {
        if (value) {
            setPerson(value)
            navigate(`/${value}`)
        }
    }
    const takePerson = (value) => setData(value)

    const debouncedInput = debounce(takePerson, 700)
    return (
        <Autocomplete
            size="small"
            disablePortal
            className={style.autocmp}
            id="combo-box-demo"
            options={timeless}
            sx={{width: 300, margin: '20px'}}
            onInputChange={(ev, value) => debouncedInput(value)}
            onChange={(_, val) => completeUser(val)}
            renderInput={(params) => <TextField {...params} label="Search"/>}
        />
    );
};

export default AutocompleteComp;