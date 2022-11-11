import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Skeleton} from "@mui/material";
import style from '../Style/Repos.module.css'
import ReposCard from "../Components/ReposCard";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import RepositoryStore from '../store/RepositoryStore'

const Repos = observer((props) => {
    const {username, repository} = useParams()
    const [reposData, setReposData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (props.person || username) {
            RepositoryStore.getReposData(setReposData, setIsLoading, username)
        }
    }, [])

    const filterHolder = RepositoryStore.filterRepos(reposData, repository);

    const collectionRepos = useMemo(() => RepositoryStore.mapRepositories(reposData, filterHolder))

    return (
        <div>
            <p className={style.header_p}>Количество репозиториев: {reposData && reposData.length}</p>
            <hr className={style.header_divide_line}/>
            <Grid container>
                {(isLoading && reposData.length) ?
                    collectionRepos
                    : (reposData && (reposData.length !== 0)) ? (<Skeleton
                        variant="rounded"
                        width='80%'
                        height={300}
                        sx={{margin: 'auto'}}/>) : (<p className={style.bottom_p}>Репозитории не найдены</p>)}
            </Grid>
        </div>

    );
});

export default Repos;