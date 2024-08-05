export const getPreferredTheme = (): Theme => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

    setBodyTheme(darkThemeMq.matches ? 'dark' : 'light');
    
    return darkThemeMq.matches ? 'dark' : 'light';
};

export const setBodyTheme = (theme: Theme) => {
    document.body.className = `theme-${theme}`;
};
