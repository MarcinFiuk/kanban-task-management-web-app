import { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Overlay from './components/Overlay';

import OpenNav from './assets/icon-show-sidebar.svg';
import { Modal } from './components/Modal';
import Form from './components/Form';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <div className={`relative ${darkMode ? 'dark' : ''}`}>
            <div className='md:hidden'>
                <Overlay open={isNavOpen} />
            </div>
            <Header
                darkMode={darkMode}
                setToggleNav={setIsNavOpen}
                isOpen={isNavOpen}
                openModal={setIsModalOpen}
            />
            <Navigation
                darkMode={darkMode}
                isOpen={isNavOpen}
                setCloseNav={setIsNavOpen}
            />
            <Modal isOpen={isModalOpen} setCloseDialog={setIsModalOpen}>
                <Form object={{}} />
            </Modal>
            <main className=''>
                <button
                    onClick={() => setIsNavOpen(true)}
                    className={`hidden md:block
                    fixed left-0 top-3/4 ps-4 pe-6 py-4 ${
                        isNavOpen ? 'scale-0' : 'scale-100 delay-200'
                    } duration-200 origin-left bg-mainPurple rounded-e-full`}
                >
                    <img src={OpenNav} alt='' role='none' />
                </button>
                <div
                    className={`${
                        isNavOpen
                            ? 'md:ms-65 lg:ms-75 ease-in '
                            : 'ms-0 ease-out delay-500'
                    } px-4 md:px-6 bg-grayLight duration-500 h-96`}
                >
                    AAAAAAAAAAAAAAAAAAAA
                </div>
            </main>
        </div>
    );
}

export default App;
