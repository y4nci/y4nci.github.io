import { Divider, Icon } from '@blueprintjs/core';
import React from 'react';

import { isOwnedByMe, projectLinks } from './services/externalLinks';

const Project = (props: { title: string, description: string, link: string }) => {
    return (
        <div className='project'>
            <div className='project-title'>
                <h2>{props.title}</h2>
                {
                    !isOwnedByMe(props.title) && (
                        <Icon icon='third-party' iconSize={20} style={{ marginLeft: '5px' }}/>
                    )
                }
            </div>
            <p>{props.description}</p>
            <a href={props.link} target='_blank' rel='noreferrer'>Go to project</a>
        </div>
    );
};

export const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <p>(some of them)</p>
            <div className='project-list'>
                {Object.entries(projectLinks).map(([title, { link, description }]) => (
                    <>
                        <Divider className="divider" />
                        <Project key={title} title={title} description={description} link={link} />
                    </>
                ))}
            </div>
            <Divider className="divider" />
            <h3>
                You can find more on my <a href='https://github.com/y4nci' target='_blank' rel='noreferrer'>GitHub</a>.
            </h3>
        </div>
    );
};