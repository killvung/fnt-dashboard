import React from 'react';
import Link from 'next/link'
import clsx from 'clsx';
import {
    Button,
    ListItem,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        justifyContent: 'flex-start',
        letterSpacing: 0,
        padding: '10px 8px',
        textTransform: 'none',
        width: '100%'
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    title: {
        marginRight: 'auto'
    },
    active: {
        color: theme.palette.primary.main,
        '& $title': {
            fontWeight: theme.typography.fontWeightMedium
        },
        '& $icon': {
            color: theme.palette.primary.main
        }
    }
}));

interface NavItemProps {
    href: string;
    Icon: Function;
    title: string
}
const NavItem: React.FC<NavItemProps> = ({ href, Icon, title }) => {
    const classes = useStyles();

    return (
        <ListItem
            className={clsx(classes.item, undefined)}
            disableGutters
        >
            <Button
                activeClassName={classes.active}
                className={classes.button}
                href={href}
                component={({ className, href, hrefAs, children, prefetch }) => (
                    <Link href={href} as={hrefAs} prefetch={prefetch}>
                        <a className={className}>
                            {children}
                        </a>
                    </Link>
                )}
            >
                {Icon && (
                    <Icon
                        className={classes.icon}
                        size="20"
                    />
                )}
                <span className={classes.title}>
                    {title}
                </span>
            </Button>
        </ListItem >
    );
};

export default NavItem;
