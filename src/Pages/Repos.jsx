import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Skeleton} from "@mui/material";
import style from '../Style/Repos.module.css'

import ReposCard from "../Components/ReposCard";

const Repos = (props) => {
    const [reposData, setReposData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const getReposData = async () => {
        await fetch(`https://api.github.com/users/${props.person}/repos`)
            .then((response) => response.json())
            .then((response) => setReposData(response))
        setIsLoading(true)

    }
    useEffect(() => {
        if (props.person) {
            getReposData()
        }
    }, [])

    const mapRepositories = () => {
        if (reposData && reposData.length > 0) {
            return reposData.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else return []
    }
    const collectionRepos = useMemo(() => mapRepositories())
    return (
        <div>
            <p className={style.header_p}>Количество репозиториев: {reposData && reposData.length}</p>
            <hr className={style.header_divide_line}/>
            <Grid container>
                {(isLoading && reposData.length) ?
                    collectionRepos
                    : (reposData && (reposData.length = 0)) ? (<Skeleton
                        variant="rounded"
                        width='80%'
                        height={300}
                        sx={{margin:'auto'}}/>) :(<p className={style.bottom_p}>Репозитории не найдены</p>)}
            </Grid>
        </div>

    );
};

export default Repos;