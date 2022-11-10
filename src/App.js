import React, {useState} from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import Repos from "./Pages/Repos";
import Page from "./Pages/Page";
import Navigationbar from "./Components/Navigationbar";
import HomePage from "./Pages/HomePage";

const App = () => {
    const [person, setPerson] = useState(null)

    return (
        <div>
            <div>
                <Navigationbar {...{setPerson}}/>
            </div>
            <div>
                <Routes>
                    <Route path="/repository" element={<Repos {...{person}}/>}/>
                    <Route path="/page" element={<Page {...{person}}/>}/>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;