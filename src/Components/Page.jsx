import React, {useEffect, useState} from 'react';
import User from "./User";
import ReposCard from "./ReposCard";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Page = (props) => {
    const {person, goToRepos, goToProfile} = props
    const [fetchRep, setFetchRep] = useState([])
    const navigate = useNavigate()
    let temp = null
    useEffect(() => {
        if (person) {
            fetch(`https://api.github.com/users/${person}/repos`)
                .then((response) => response.json())
                .then((response) => setFetchRep(response))
        }
    }, [person])
    temp = fetchRep.filter((val, index) => index < 4)
    // console.log(temp)
    // console.log(`person: ${person}`)
    // console.log(`fetchRep: ${fetchRep}`)
    return (
        <div>
            <div>
                {props.person && <User
                    person={person}
                    goToRepos={goToRepos}
                    goToProfile={goToProfile}
                />}
            </div>
            <hr style={{'margin-top': '50px', width: '50%'}}/>
            <div style={{display:'flex', justifyContent:'center', marginLeft:'700px'}}>
                <Button variant="outlined" onClick={() => navigate('/repository')}>Показать все репозитории</Button>
            </div>
            <div style={{justifyContent: 'center', display: 'flex'}}>
                <Grid container style={{width: '50%', marginTop:'50px'}}>
                    {temp && temp.map((val) => <ReposCard
                        size={6}
                        watchers={val.watchers}
                        name={val.name}
                        stars={val.stargazers_count}
                    />)}
                </Grid>
            </div>
        </div>
    );
};

export default Page;