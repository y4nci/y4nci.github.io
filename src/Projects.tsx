import { Icon } from '@blueprintjs/core';
import React from 'react';

import Keyboard from './assets/images/keyboard.png';
import { projectLinks } from './services/externalLinks';
import { useActiveTab } from './services/useActiveTab';

export const Projects = () => {
    const { activeTab, setActiveTab } = useActiveTab();

    const isActive = activeTab === 'projects';

    console.log(projectLinks, isActive);

    return (
        <div
            className={'projects'}
            style={isActive ? { height: 'fit-content' } : undefined}
        >
            {!isActive && <img src={Keyboard} alt='projects' style={{ display: isActive ? 'none' : 'block' }} />}
            <div
                onClick={(e) => { setActiveTab(isActive ? null : 'projects'); e.stopPropagation(); }}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
            >
                <h1 style={{ marginTop: isActive ? '-5px' : '0px' }}>Projects</h1>
                <Icon
                    size={50}
                    icon={isActive ? 'chevron-up' : 'chevron-down'}
                    style={{ color: 'var(--light-pinkish)', cursor: 'pointer' }}
                />
            </div>
            {isActive && Object.entries(projectLinks).map(([name, project]) => (
                <div className='external-link'>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                        {name}
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};