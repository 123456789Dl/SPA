import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import HandlerAutocomplete from "./HandlerAutocomplete";
import style from '../Style/Navigationbar.module.css'
const Navigationbar = ({setPerson}) => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={style.toolbar_autocomp}>
                <HandlerAutocomplete setPerson={setPerson}/>
            </Toolbar>
        </AppBar>
    );
};

export default Navigationbar;