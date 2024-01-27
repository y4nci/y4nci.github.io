export const getTheme = (): Theme => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    
    return darkThemeMq.matches ? 'dark' : 'light';
};
