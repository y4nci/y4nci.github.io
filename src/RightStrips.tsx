import React from 'react';

import { externalLinks, getIconForExternalLink, openExternalLink } from './services/externalLinks';

export default function RightStrips() {
    return <div className='right-strips' style={{ marginTop: '-10px' }}>
        <div className='right-strips top'>
            {externalLinks.map(link => (
                <div key={link} className='external-link' onClick={() => openExternalLink(link)}>
                    <img src={getIconForExternalLink(link)} alt={link} />
                </div>
            ))}
        </div>
        <div className='right-strips bottom'>
            <div className='external-link' onClick={() => openExternalLink('source')}>
                <img src={getIconForExternalLink('source')} alt='source' />
            </div>
        </div>
    </div>;
}
