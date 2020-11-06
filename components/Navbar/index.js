import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles
} from '@material-ui/core';
import {
    BarChart as BarChartIcon,
    Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem.tsx';

const user = {
    avatar: '/favicon.ico',
    jobTitle: 'Professional Escaper',
    name: 'Nameless Fornow'
};

const items = [
    {
        href: '/',
        icon: BarChartIcon,
        title: 'Dashboard'
    },
    {
        href: '/page2',
        icon: UsersIcon,
        title: 'Page2'
    },
];

const useStyles = makeStyles(() => ({
    mobileDrawer: {
        width: 256
    },
    desktopDrawer: {
        width: 256,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
    const classes = useStyles();

    const content = (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Avatar
                    className={classes.avatar}
                    src={user.avatar}
                />
                <Typography
                    className={classes.name}
                    color="textPrimary"
                    variant="h5"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box p={2}>
                <List>
                    {items.map(({ href, title, icon }) => (
                        <NavItem
                            href={href}
                            key={title}
                            title={title}
                            Icon={icon}
                        />
                    ))}
                </List>
            </Box>
            <Box flexGrow={1} />
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.mobileDrawer }}
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer }}
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

NavBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

NavBar.defaultProps = {
    onMobileClose: () => { },
    openMobile: false
};

export default NavBar;
