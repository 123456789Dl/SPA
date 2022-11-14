import React, {useEffect, useState} from 'react';
import '../Style/HomePage.module.css'
import {useLocation, useParams} from "react-router-dom";
import Page from "./Page";


const HomePage = () => {
    const {username} = useParams()
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Page person={username}/>
        </div>
    );
};

export default HomePage;