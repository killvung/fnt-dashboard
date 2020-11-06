import React from 'react';

const Logo = (props) => {
    return (
        <img
            alt="Logo"
            // TODO: Use own logo
            // src="/static/logo.svg"
            {...props}
        />
    );
};

export default Logo;
