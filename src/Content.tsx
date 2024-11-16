import React from 'react';

import { Name } from './Name';
import { Projects } from './Projects';
import RightStrips from './RightStrips';
import { useActiveTab } from './services/useActiveTab';
import { SomethingSomewhere } from './SomethingSomewhere';

export const Content = () => {
    const { setActiveTab } = useActiveTab();

    return (
        <div className="content-container" onClick={() => { setActiveTab(null); }}>
            <div className='content'>
                <Name />
                <SomethingSomewhere />
                <Projects />
            </div>
            <RightStrips />
        </div>
    );
};
