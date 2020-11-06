import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles
} from '@material-ui/core';
import {
    AlertCircle as AlertCircleIcon,
    BarChart as BarChartIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
    ShoppingBag as ShoppingBagIcon,
    User as UserIcon,
    UserPlus as UserPlusIcon,
    Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem.tsx';

const user = {
    // TODO: Use my picture
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Runner',
    name: 'John Doe'
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
    // {
    //     href: '/app/products',
    //     icon: ShoppingBagIcon,
    //     title: 'Products'
    // },
    // {
    //     href: '/app/account',
    //     icon: UserIcon,
    //     title: 'Account'
    // },
    // {
    //     href: '/app/settings',
    //     icon: SettingsIcon,
    //     title: 'Settings'
    // },
    // {
    //     href: '/login',
    //     icon: LockIcon,
    //     title: 'Login'
    // },
    // {
    //     href: '/register',
    //     icon: UserPlusIcon,
    //     title: 'Register'
    // },
    // {
    //     href: '/404',
    //     icon: AlertCircleIcon,
    //     title: 'Error'
    // }
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
                            icon={icon}
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
