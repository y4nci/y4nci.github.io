let currentTheme: Theme = 'light';

export const getTheme = () => {
    return currentTheme;
};

export const setTheme = (theme: Theme) => {
    currentTheme = theme;
};
