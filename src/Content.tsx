import { Button, Divider, Icon } from '@blueprintjs/core';
import React, { useState } from 'react';

import Me from './assets/images/me.jpeg';
import { externalLinks, getIconForExternalLink, openExternalLink } from './services/externalLinks';
import { getTheme } from './services/themeService';

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
            <div className='external-button-group'>
                <Button
                    icon={<Icon icon='plus' color={props.theme === 'light' ? 'white' : 'black'} />}
                    className={`plus-button rounded-button more-button-${props.theme} external-button`}
                    style={{ zIndex: externalLinks.length + 1 }}
                />
                {externalLinks.map((link, i) => (
                    <Button
                        key={i}
                        icon={<img style={{ width: '25px', height: '25px' }} src={getIconForExternalLink(link, props.theme)} alt={link} />}
                        className={`rounded-button more-button-${props.theme} external-button`}
                        onClick={() => openExternalLink(link)}
                        style={{
                            zIndex: externalLinks.length - i,
                        }}
                    />
                ))}
            </div>
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
    const [theme, setTheme] = useState<Theme>(getTheme());

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
            <div className='footer'>
                <Button
                    icon={<Icon icon={theme === 'light' ? 'moon' : 'flash'} color={theme === 'light' ? '#222' : '#ffd36b'} />}
                    onClick={toggleTheme}
                    minimal
                    className='rounded-button'
                />

                <div className='footer-text'>
                    <a
                        href='https://github.com/y4nci/home'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`source-${theme}`}
                    >source</a>
                    <p>baran yancı, 2024</p>
                </div>
            </div>
        </div>
    );
};
