import React, {useEffect, useState} from 'react';
import User from "../Components/User";
import ReposCard from "../Components/ReposCard";
import {Button, Grid, Skeleton} from "@mui/material";
import {useNavigate} from "react-router-dom";


const Page = (props) => {
    const {person, goToRepos, goToProfile} = props
    const [fetchRep, setFetchRep] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    let temp = null
    const getUserData = async () => {
        await fetch(`https://api.github.com/users/${person}/repos`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': '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'
            })
        })
            .then((response) => response.json())
            .then((response) => setFetchRep(response))
        setIsLoading(true)
    }
    useEffect(() => {
        if (person) {
            getUserData()
        }
    }, [person])
    temp = fetchRep.filter((val, index) => index < 4)

    return (
        <div>
            {(isLoading) ? (
                <div>
                    {props.person && <User {...{person, goToRepos}}/>}
                </div>
            ) : (
                <Skeleton variant="rounded" width='50%' height={100} sx={{margin: '20px auto'}}/>
            )}
            {(props.person) ? (
                <div>
                    <hr style={{'margin-top': '30px', width: '50%'}}/>
                    <div style={{display: 'flex', justifyContent: 'center', marginLeft: '700px'}}>
                        <Button variant="outlined" onClick={() => navigate('/repository')}>Показать все репозитории</Button>
                    </div>
                </div>
            ) : (<div></div>)}

            {(isLoading) ? (
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <Grid container style={{width: '50%', marginTop: '50px'}}>
                        {props.person && temp.map((val) => <ReposCard
                            size={6}
                            watchers={val.watchers}
                            name={val.name}
                            stars={val.stargazers_count}
                            description={val.description}
                        />)}
                    </Grid>
                </div>
            ) : (
                <Grid>
                    <Grid>
                        <Skeleton variant="rounded" width='50%' height={100} sx={{margin: '20px auto'}}/>
                    </Grid>
                    <Grid>
                        <Skeleton variant="rounded" width='50%' height={100} sx={{margin: '20px auto'}}/>
                    </Grid>
                </Grid>
            )}

        </div>

    );
};

export default Page;