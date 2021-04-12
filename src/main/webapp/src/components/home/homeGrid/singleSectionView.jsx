import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const SingleSectionView = ({data}) => {
    const classes = useStyles();
    return (
        <Grid item xs={4}>
            <Link exact to={data.type}>
            <div className={classes.paper}>
                <img src={data.image} alt="my image"/>
                <h4>{data.name}</h4>
            </div>
            </Link>
        </Grid>
    )
}