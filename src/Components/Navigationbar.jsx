import React from 'react';
import {AppBar, Button, IconButton, Link, Toolbar, Typography} from "@mui/material";
import AutocompleteComp from "./AutocompleteComp";
import {useNavigate} from "react-router-dom";

const Navigationbar = (props) => {
    const navigate = useNavigate()
    const goToRepositoryCallback = () => {
        navigate('/repository')
    }
    const goToProfileCallback = () => {
        navigate('/page')
    }
    return (
        <AppBar position="static">
            <Toolbar variant="dense" style={{display:'grid', 'grid-template-columns': '2fr 0.2fr 0.2fr'}}>
                <AutocompleteComp
                    timeless={props.timeless}
                    setData={props.setData}
                    setPerson={props.setPerson}/>
                <Typography variant='h6' component='div'>
                    <Link onClick={goToProfileCallback}  underline="hover" sx={{cursor:'pointer'}} color='inherit'>Профиль</Link>
                </Typography>
                <Typography variant='h6' component='div'>
                    <Link onClick={goToRepositoryCallback}  underline="hover" sx={{cursor:'pointer'}} color='inherit'>Репозитории</Link>
                </Typography>



            </Toolbar>
        </AppBar>
    );
};

export default Navigationbar;