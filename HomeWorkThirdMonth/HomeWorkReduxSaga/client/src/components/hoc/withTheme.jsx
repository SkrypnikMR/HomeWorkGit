import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();

export const withTheme = (Component) => () => {
    const [theme, setTheme] = useState(false);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Component />
        </ThemeContext.Provider>
    )
};

export const useTheme = () => ({ ...useContext(ThemeContext) });

