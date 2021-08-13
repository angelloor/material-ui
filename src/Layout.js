import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grillSecundaria: {
        marginTop: "20px"
    }
}));

function Layout(props) {
    const classes = useStyles();
    // xs sm md lg xl 
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2} className={classes.grillSecundaria} direction={'column'}>
                <Grid container direction={'row'} spacing={2} >
                    <Grid item xs={4} >
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={4} >
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Layout;
