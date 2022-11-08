import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function ReposCard(props) {
    const {size = 4, watchers, name, id, stars} = props
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
                    <Grid>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <div style={{display:'flex'}}>
                                <div style={{marginRight:'5px'}}><VisibilityIcon/></div><div style={{paddingTop:'3px'}}>{watchers}</div>
                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div style={{display:'flex'}}>
                                <div style={{marginRight:'5px'}}><ThumbUpIcon sx={{color:'black'}}/></div><div style={{paddingTop:'3px'}}>Подписки</div>
                            </div>
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography>
                            <div style={{display:'flex'}}>
                                <div style={{marginRight:'5px'}}><StarRateIcon/></div><div style={{paddingTop:'3px'}}>{stars}</div>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
