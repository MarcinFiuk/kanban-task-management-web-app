import { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Overlay from './components/Overlay';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className={`relative ${darkMode ? 'dark' : ''}`}>
            <Overlay open={isNavOpen} />
            <Header
                darkMode={darkMode}
                setOpenNav={setIsNavOpen}
                isOpen={isNavOpen}
            />
            <Navigation darkMode={darkMode} isOpen={isNavOpen} />
            <main className=''>
                <div
                    className={`${
                        isNavOpen
                            ? 'md:ms-65 lg:ms-75 ease-in'
                            : 'ms-0 ease-out'
                    } px-4 md:px-6 bg-grayLight duration-500 h-96`}
                >
                    AAAAAAAAAAAAAAAAAAAA
                </div>
            </main>
        </div>
    );
}

export default App;
