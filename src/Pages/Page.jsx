import React, {useEffect, useMemo, useState} from 'react';
import User from "../Components/User";
import ReposCard from "../Components/ReposCard";
import {Button, Grid, Skeleton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import style from '../Style/Page.module.css'
import { observer } from "mobx-react-lite";
import GeneralStore from '../store/GeneralStore'


const Page = observer((props) => {
    const {person, goToRepos} = props
    const [fetchRep, setFetchRep] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (person) {
            GeneralStore.getReposData(setFetchRep,setIsLoading,person)
        }
    }, [person])
    const temp = useMemo(() => fetchRep.filter((val, index) => index < 4))

    return (
        <div>
            {(isLoading) ? (
                <div>
                    {props.person && <User {...{person, goToRepos}}/>}
                </div>
            ) : (
                <Skeleton variant="rounded" width='50%' height={100} className={style.skel_item}/>
            )}
            {(props.person) ? (
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
                        {props.person && temp.map((val) => <ReposCard
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