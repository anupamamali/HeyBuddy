import React from 'react';
import {sectionData} from './homeGridData';
import {SingleSectionView} from './singleSectionView'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './homeGrid.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export const HomeGridView = () => {
    const classes = useStyles();
    return (
        <div className={`${classes.root} home-grid-view-container`}>
            <Grid container spacing={6} justify="space-around" alignItems="center">
                {sectionData.map(data => {
                    return <SingleSectionView data={data}/>
                })}
            </Grid>
        </div>
    )
}