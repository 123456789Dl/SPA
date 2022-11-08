import React, {useEffect, useState} from 'react';
import {Button, Container, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ReposCard from "./ReposCard";

const Repos = (props) => {
    const navigate = useNavigate()
    const [reposData, setReposData] = useState(null)
    useEffect(() => {
        if (props.person) {
            fetch(`https://api.github.com/users/${props.person}/repos`)
                .then((response) => response.json())
                .then((response) => setReposData(response))
        }
    }, [])

    const mapRepositories = () => {
        if (reposData && reposData.length > 0) {
            return reposData.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
            />)
        }
    }

    const backAutocomplete = () => {
        navigate('/')
    }
    console.log(`Данные репозитория:${reposData}`)
    console.log(`Пропсы:${props.person}`)
    console.log(`Ф-я:${mapRepositories()}`)
    return (
        <div>
            {/*<Button variant="contained" sx={{margin:'20px'}} onClick={backAutocomplete}>Вернуться на главную</Button>*/}
            <p style={{'text-align': 'center'}}>Количество репозиториев: {reposData && reposData.length}</p>
            <hr style={{width: '30%'}}/>
            <Grid container>
                {mapRepositories() ? mapRepositories() : 'Данные не найдены'}
            </Grid>
        </div>

    );
};

export default Repos;