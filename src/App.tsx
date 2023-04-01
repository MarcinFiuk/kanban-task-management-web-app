import { useState } from 'react';

import Header from './components/Header';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Header darkMode={darkMode} />
        </div>
    );
}

export default App;
