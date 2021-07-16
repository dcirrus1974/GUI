import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  progress: {
    margin: theme.spacing(10),
  },
});

function Loader(props) {
    const { classes } = props;
    return (
        <Grid container justifyContent="center">
            <CircularProgress className={classes.progress} color="secondary" />
        </Grid>
    );
}

Loader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
