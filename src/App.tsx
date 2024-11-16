import React from 'react';

import { Content } from './Content';
import { ActiveTabProvider } from './services/useActiveTab';

function App() {
    return (
        <ActiveTabProvider>
            <div className="App">
                <Content />
            </div>
        </ActiveTabProvider>
    );
}

export default App;
