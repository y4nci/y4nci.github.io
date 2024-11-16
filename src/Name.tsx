import React from 'react';

export const Name = () => {
    const colors = [
        'var(--light-red)',
        'var(--light-orange)',
        'var(--light-yellow)',
        'var(--light-green)',
        'var(--light-teal)',
        'var(--light-bluish)',
        'var(--light-purple)',
        'var(--less-light-pinkish)',
        'var(--pinkish)',
        'var(--orange)',
    ].reverse();

    return (
        <div className='name'>
            {
                colors.map(color => (
                    <h1 style={{ color }}>Baran Yancı</h1>
                ))
            }
        </div>
    );
};
