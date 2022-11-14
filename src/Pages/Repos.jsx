import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Skeleton} from "@mui/material";
import style from '../Style/Repos.module.css'
import ReposCard from "../Components/ReposCard";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import GeneralStore from '../store/GeneralStore'

const Repos = observer(({person}) => {
    const {username, repository} = useParams()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (person || username) {
            GeneralStore.getReposData( setIsLoading, username)
        }
    }, [])

    const mapRepositories = (filterHolder) => {
        if (GeneralStore.repositoryDate && GeneralStore.repositoryDate.length > 0 && filterHolder.length > 0) {
            return filterHolder.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else if (GeneralStore.repositoryDate && GeneralStore.repositoryDate.length > 0) {
            return GeneralStore.repositoryDate.map((el) => <ReposCard
                id={el.id}
                name={el.name}
                watchers={el.watchers_count}
                stars={el.stargazers_count}
                description={el.description}
            />)
        } else return []
    }

    const filterHolder = useMemo(() => GeneralStore.filterRepos(repository))

    const collectionRepos = useMemo(() => mapRepositories(filterHolder))

    return (
        <div>
            <p className={style.header_p}>
                Количество репозиториев: {GeneralStore.repositoryDate  && GeneralStore.repositoryDate .length}
            </p>
            <hr className={style.header_divide_line}/>
            <Grid container>
                {(isLoading && GeneralStore.repositoryDate.length) ?
                    collectionRepos
                    : (GeneralStore.repositoryDate && (GeneralStore.repositoryDate.length !== 0)) ? (<Skeleton
                        variant="rounded"
                        width='80%'
                        height={300}
                        sx={{margin: 'auto'}}/>) : (<p className={style.bottom_p}>Репозитории не найдены</p>)}
            </Grid>
        </div>

    );
});

export default Repos;