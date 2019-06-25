// Created by Rachael Esler 25/06/19

import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MaterialAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='primary'>
                <Toolbar>
                    {boolean('Menu button?', true, 'Elements') &&
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    }
                    {boolean('Header?', true, 'Elements') &&
                    <Typography variant="h6" className={classes.title}>
                        {text('Heading', 'News', 'Values')}
                    </Typography>
                    }
                    {boolean('Button?', true, 'Elements') &&
                    <Button color="inherit">
                        {text('Button text', 'Login', 'Values')}
                    </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}