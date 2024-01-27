import { Button, Divider, Icon } from '@blueprintjs/core';
import React, { useState } from 'react';

import Me from './assets/images/me.jpeg';

const Left = () => {
    const letterSpacingValues = [
        0,
        0.021,
        0.0444,
        0.061,
        0.074,
        0.09,
        0.101,
        0.116,
        0.1235,
    ];

    return (
        <div className='left'>
            {Array.from({ length: 9 }, (_, i) => (
                <div
                    key={i}
                    className='left-text'
                    style={{
                        fontWeight: 900 - i * 100,
                        letterSpacing: `${letterSpacingValues[i]}em`,
                    }}
                >
                    Baran Yancı
                </div>
            ))}
        </div>
    );
};

const Middle = (props: { theme: Theme }) => {
    return (
        <div className='middle'>
            <img
                src={Me}
                alt='me'
                className={`middle-image-${props.theme}`}
            />
        </div>
    );
};

const Right = (props: { theme: Theme }) => {
    return (
        <div className='right'>
            <p>
                Middle East Technical University, Computer Engineering
            </p>
            <Divider className={`divider-${props.theme}`} />
            <p>
                FileMap, Inc.
            </p>
            <Divider className={`divider-${props.theme}`} />
            <p>
                Ankara, Turkey
            </p>
        </div>
    );
};

export const Content = () => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`theme-${theme}`}>
            <div className='content'>
                <Left />
                <Middle theme={theme} />
                <Right theme={theme} />
            </div>
            <div className='toggle-theme'>
                <Button
                    icon={<Icon icon={theme === 'light' ? 'moon' : 'flash'} color={theme === 'light' ? '#222' : '#ffd36b'} />}
                    onClick={toggleTheme}
                    minimal
                    className='toggle-button'
                />
            </div>
        </div>
    );
};
