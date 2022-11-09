import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function ReposCard(props) {
    const {size = 4, watchers, name, id, stars, description} = props
    return (
        <Grid xs={size} mb='20px'>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFE0',
                }}
            >
                <Grid item>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Grid sx={{m: '3px 3px 3px 0'}}>
                            {(description) ? description : 'No data'}
                        </Grid>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <Grid container>
                            <Grid>
                                <VisibilityIcon/>
                            </Grid>
                            <Grid sx={{m: '3px'}}>
                                {watchers}
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography variant="body2">
                        <Grid container>
                            <Grid>
                                <StarRateIcon/>
                            </Grid>
                            <Grid sx={{m: '3px'}}>
                                {stars}
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    );
}
