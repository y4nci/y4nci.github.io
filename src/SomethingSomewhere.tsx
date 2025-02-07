/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import Light from './assets/images/light.png';
import something_somewhere from './assets/json/something_somewhere.json';
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
        {
            Object.entries(something_somewhere.showThis).map(([key, value]) => (
                showThis(key as Clicked) && <p key={key} onClick={e => handleClick(key as Clicked, e)}>
                    {value}
                </p>
            ))
        }
        {
            Object.entries(something_somewhere.showDescription).map(([key, value]) => (
                showDescription(key as Clicked) && <p key={key} className='description' onClick={e => handleClick(key as Clicked, e)}>
                    {value}
                </p>
            ))
        }
    </div>;
};
