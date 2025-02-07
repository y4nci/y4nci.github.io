/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import Light from './assets/images/light.png';
import { useActiveTab } from './services/useActiveTab';

type Clicked = 'academic' | 'professional' | 'location' | null;

export const SomethingSomewhere = () => {
    const [clicked, setClicked] = useState<Clicked>();

    const { activeTab, setActiveTab } = useActiveTab();

    useEffect(() => {
        if (activeTab !== 'something-somewhere') {
            setClicked(null);
        }
    }, [activeTab]);

    const handleClick = (c: Clicked, e: React.MouseEvent<HTMLAnchorElement | HTMLParagraphElement>) => {
        e.stopPropagation();
        setActiveTab('something-somewhere');
        setClicked(c === clicked ? null : c);
    };

    const showClicked = activeTab === 'something-somewhere' && clicked;

    const showThis = (c: Clicked) => (showClicked && clicked === c) || !clicked;

    const showDescription = (c: Clicked) => showClicked && clicked === c;

    return <div className='something-somewhere' style={{
        backgroundImage: `url(${Light})`,
        backgroundPosition: 'center',
        backgroundSize: '150%',
        backgroundBlendMode: 'multiply',
    }} onClick={() => { setClicked(null); }}>
        {showThis('academic') && <p
            onClick={e => handleClick('academic', e)}
        >
            B.Sc. Computer Engineering @ Middle East Technical University
        </p>}
        {showThis('professional') && <p
            onClick={e => handleClick('professional', e)}
        >
            FileMap, Inc.
        </p>}
        {showThis('location') && <p onClick={e => handleClick('location', e)}>
            Ankara, Turkey
        </p>}

        {showDescription('academic') && <p className='description'>
            Graduated in 2025 with a GPA of 3.45/4.00.
        </p>}

        {showDescription('professional') && <p className='description'>
            Software engineer, responsible for the development of the company's flagship product. Since 2022.
        </p>}

        {showDescription('location') && <p className='description'>
            Currently located in Ankara, Turkey.
        </p>}
    </div>;
};
