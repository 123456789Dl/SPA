import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import style from './UserCard.module.css'
import {useNavigate} from "react-router-dom";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function UserCard(props) {
    return (
        <Paper
            sx={{
                p: 2,
                margin: '20px auto auto auto',
                alignItems: 'center',
                maxWidth: 1000,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFE0',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 128, height: 128}} onClick={props.goToRepos}>
                        <Img alt="complex" src={props.img}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {props.login}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Blog: {props.blog}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: {props.id}
                            </Typography>
                            <Typography variant="body2">
                                Followers: {props.followers}
                            </Typography>
                            <Typography variant="body2">
                                Following: {props.following}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {props.created}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}