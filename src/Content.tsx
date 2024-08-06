import { Button, Divider, Icon } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';

import Me from './assets/images/me.jpeg';
import { Name } from './assets/svg/Name';
import { Projects } from './Projects';
import { externalLinks, getIconForExternalLink, openExternalLink } from './services/externalLinks';
import { getPreferredTheme, setBodyTheme } from './services/themeService';

const Left = (props: { theme: Theme }) => {
    return (
        <div className='left'>
            <Name theme={props.theme} />
        </div>
    );
};

const Middle = (props: { theme: Theme }) => {
    return (
        <div
            className='middle'
        >
            <div className="middle-element">
                <div className='show-on-hover'>
                    <Projects />
                </div>
                <img
                    src={Me}
                    alt='me'
                    className='hide-on-hover'
                />
            </div>
            <div className='external-button-group'>
                <Button
                    icon={<Icon icon='plus' color={props.theme === 'light' ? 'white' : 'black'} />}
                    className="plus-button rounded-button more-button external-button"
                    style={{ zIndex: externalLinks.length + 1 }}
                />
                {externalLinks.map((link, i) => (
                    <Button
                        key={i}
                        icon={<img style={{ width: '25px', height: '25px' }} src={getIconForExternalLink(link, props.theme)} alt={link} />}
                        className="rounded-button more-button external-button"
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

const Right = () => {
    return (
        <div className='right'>
            <div className='right-element'>
                <Icon icon='learning' iconSize={20} />
                <a href='https://ceng.metu.edu.tr/' target='_blank' rel='noopener noreferrer'>
                    Middle East Technical University, Department of Computer Engineering
                </a>
            </div>
            <Divider className="divider" />
            <div className='right-element'>
                <Icon icon='office' iconSize={20} />
                <a href='https://filemap.com' target='_blank' rel='noopener noreferrer'>
                    FileMap, Inc.
                </a>
            </div>
            <Divider className="divider" />
            <div className='right-element'>
                <Icon icon='map-marker' iconSize={20} />
                <p>
                    Ankara, Turkey
                </p>
            </div>
        </div>
    );
};

export const Content = () => {
    const [theme, setTheme] = useState<Theme>(getPreferredTheme());

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setBodyTheme(theme);
    }, [theme]);

    return (
        <div className="content-container">
            <div className='content'>
                <Left theme={theme} />
                <Middle theme={theme} />
                <Right />
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
                        href='https://github.com/y4nci/y4nci.github.io'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="source"
                    >source</a>
                    <p>baran yanci, 2024</p>
                </div>
            </div>
        </div>
    );
};
