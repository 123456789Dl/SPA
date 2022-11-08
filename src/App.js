import React, {useEffect, useState} from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import Repos from "./Components/Repos";
import Page from "./Components/Page";
import Navigationbar from "./Components/Navigationbar";
import HomePage from "./Components/HomePage";
import {useNavigate} from "react-router-dom";


const App = () => {
    const [textData, setData] = useState('')
    const [users, setUsers] = useState([])
    const [person, setPerson] = useState(null)
    const navigate = useNavigate()
    let timeless = []

    const goToRepositoryCallback = (data) => {
        navigate('/repository')
    }
    const goToProfileCallback = () => {
        navigate('/page')
    }

    useEffect(() => {
        if (textData) {
            fetch(`https://api.github.com/search/users?q=${textData}`)
                .then((response) => (response.json()))
                .then((response) => setUsers(response.items))
        }
    }, [textData])

    if (users) {
        timeless = users.map((el) => el.login)
    }

    return (
        <div>
            <div>
                <Navigationbar
                    timeless={timeless}
                    setData={setData}
                    setPerson={setPerson}/>
            </div>
            <div>
                <Routes>
                    <Route path="/repository" element={<Repos person={person}/>}/>
                    <Route path="/page" element={<Page
                        person={person}
                        goToRepos={goToRepositoryCallback}
                        goToProfile={goToProfileCallback}
                    />}/>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;