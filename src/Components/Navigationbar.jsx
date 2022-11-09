import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import HandlerAutocomplete from "./HandlerAutocomplete";

const Navigationbar = (props) => {

    return (
        <AppBar position="static">
            <Toolbar variant="dense" style={{display: 'grid', 'grid-template-columns': '2fr 0.2fr 0.2fr'}}>
                <HandlerAutocomplete setPerson={props.setPerson}/>
            </Toolbar>
        </AppBar>
    );
};

export default Navigationbar;