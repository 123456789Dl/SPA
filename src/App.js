import React, {useState} from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import Repos from "./Pages/Repos";
import Page from "./Pages/Page";
import Navigationbar from "./Components/Navigationbar";
import HomePage from "./Pages/HomePage";
import Home from "./Pages/Home";

const App = () => {
    const [person, setPerson] = useState(null)

    return (
        <div>
            <div>
                <Navigationbar {...{setPerson}}/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:username" element={<HomePage/>}/>
                    <Route path="/:username/:repository" element={<Repos {...{person}}/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;