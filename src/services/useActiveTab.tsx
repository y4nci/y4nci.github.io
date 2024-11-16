import React, { createContext, useContext, useState } from 'react';

type ActiveTab = 'something-somewhere' | 'projects' | null;

const ActiveTabContext = createContext<{
    activeTab: ActiveTab;
    setActiveTab: (tab: ActiveTab) => void;
} | null>(null);

export const ActiveTabProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState<ActiveTab>(null);

    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ActiveTabContext.Provider>
    );
};

// Custom hook to use the active tab
export const useActiveTab = () => {
    const context = useContext(ActiveTabContext);
  
    if (!context) {
        throw new Error('useActiveTab must be used within an ActiveTabProvider');
    }

    return context;
};
