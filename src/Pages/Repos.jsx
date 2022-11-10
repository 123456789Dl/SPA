import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Skeleton} from "@mui/material";
import style from '../Style/Repos.module.css'
import ReposCard from "../Components/ReposCard";
import {useParams} from "react-router-dom";

const Repos = (props) => {
    const {username, repository} = useParams()
    const [reposData, setReposData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const getReposData = async () => {
        await fetch(`https://api.github.com/users/${username}/repos`, {
            method: 'GET',
            headers: new Headers({
                "Authorization": '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'
            })
        })
            .then((response) => response.json())
            .then((response) => setReposData(response))
        setIsLoading(true)

    }
    useEffect(() => {
        if (props.person || username) {
            getReposData()
        }
    }, [])
    const filterRepos = () => {
        if (reposData && reposData.length > 0) {
            return (reposData.filter((el) => repository === el.name))
        }
    }
    const filterHolder = filterRepos();

    const mapRepositories = () => {
        if (reposData && reposData.length > 0 && filterHolder.length > 0) {
            return filterHolder.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else if (reposData && reposData.length > 0) {
            return reposData.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else return []
    }
    console.log(mapRepositories())
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
                        sx={{margin: 'auto'}}/>) : (<p className={style.bottom_p}>Репозитории не найдены</p>)}
            </Grid>
        </div>

    );
};

export default Repos;