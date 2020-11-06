import * as React from 'react';
import clsx from 'clsx';
import {
    AppBar,
    // Maybe I will use this one day, I saw this from example
    // Badge,
    // Box,
    Hidden,
    Toolbar,
    makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        width: 60,
        height: 60
    }
}));

interface NavBarTopProps {
    className: string;
    onMobileNavOpen: Function;
}

const NavBarTop: React.FC<NavBarTopProps> = (props) => {
    const classes = useStyles();
    return (
        <AppBar
            className={clsx(classes.root, props.className)}
            elevation={0}
        >
            <Toolbar>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={() => { props.onMobileNavOpen() }}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default NavBarTop;
