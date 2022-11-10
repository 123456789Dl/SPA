import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import HandlerAutocomplete from "./HandlerAutocomplete";
import style from '../Style/Navigationbar.module.css'
const Navigationbar = (props) => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense" className={style.toolbar_autocomp}>
                <HandlerAutocomplete setPerson={props.setPerson}/>
            </Toolbar>
        </AppBar>
    );
};

export default Navigationbar;