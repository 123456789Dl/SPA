import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import style from '../Style/UserCard.module.css'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function UserCard({img, login, blog, followers, following, created}) {
    const dayjs = require('dayjs')
    return (
        <Paper className={style.paper_wrap}
               sx={{
                   p: 2,
                   backgroundColor: (theme) =>
                       theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFE0',
               }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <Typography className={style.img_wrap}>
                        <Img alt="complex" src={img}/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm container className={style.userCard_container}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item>
                            <Grid className={style.userCard_item}>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {login}
                                </Typography>
                            </Grid>
                            <Grid className={style.grid_item}>
                                <Typography variant="body2" gutterBottom>
                                    Blog: {blog}
                                </Typography>
                            </Grid>
                            <Grid className={style.grid_item}>
                                <Typography variant="body2">
                                    Followers: {followers}
                                </Typography>
                            </Grid>
                            <Grid className={style.grid_item}>
                                <Typography variant="body2">
                                    Following: {following}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            {created && dayjs(created).format('YYYY-MM-DD')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}