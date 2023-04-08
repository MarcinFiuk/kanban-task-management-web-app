import { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`relative ${darkMode ? 'dark' : ''}`}>
            <Header darkMode={darkMode} />
            <Navigation darkMode={darkMode} />
            <main className='px-4 md:px-6'>
                <div className=' md:ms-[300px] bg-lines h-96'>
                    AAAAAAAAAAAAAAAAAAAA
                </div>
            </main>
        </div>
    );
}

export default App;
