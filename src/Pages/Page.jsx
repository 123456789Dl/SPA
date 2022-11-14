import React, {useEffect, useMemo, useState} from 'react';
import User from "../Components/User";
import ReposCard from "../Components/ReposCard";
import {Button, Grid, Skeleton} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import style from '../Style/Page.module.css'
import { observer } from "mobx-react-lite";
import GeneralStore from '../store/GeneralStore'
import UserCard from "../Components/UserCard";


const Page = observer(({person}) => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {usersDate} = GeneralStore

    useEffect(() => {
        if (person) {
            Promise.all([GeneralStore.getReposData(setIsLoading,person), GeneralStore.getUsersData(person)])
        }
    }, [person])
    const temp = useMemo(() => GeneralStore.repositoryDate.filter((val, index) => index < 4))

    return (
        <div>
            {(isLoading) ? (
                <div>
                    {/*{person && <User {...{person, goToRepos}}/>}*/}
                    {person && <UserCard
                        img={usersDate.avatar_url}
                        login={usersDate.name}
                        id={usersDate.id}
                        blog={usersDate.blog}
                        created={usersDate.created_at}
                        followers={usersDate.followers}
                        following={usersDate.following}
                        goToRepos={usersDate.goToRepos}
                    />}
                </div>
            ) : (
                <Skeleton variant="rounded" width='50%' height={100} className={style.skel_item}/>
            )}
            {(person) ? (
                <div>
                    <hr className={style.dividing_line}/>
                    <div className={style.button_wrapper}>
                        <Button variant="outlined" onClick={() => navigate(`/${person}/repository`)}>Показать все репозитории</Button>
                    </div>
                </div>
            ) : (<div></div>)}

            {(isLoading) ? (
                <Grid className={style.few_reposCards_wrapper}>
                    <Grid container className={style.reposCards_container}>
                        {person && temp.map((val) => <ReposCard
                            key={val.id}
                            size={6}
                            watchers={val.watchers}
                            name={val.name}
                            stars={val.stargazers_count}
                            description={val.description}
                        />)}
                    </Grid>
                </Grid>
            ) : (
                <Grid>
                    <Grid>
                        <Skeleton variant="rounded" width='50%' height={100} className={style.skel_item}/>
                    </Grid>
                    <Grid>
                        <Skeleton variant="rounded" width='50%' height={100} className={style.skel_item}/>
                    </Grid>
                </Grid>
            )}

        </div>

    );
});

export default Page;