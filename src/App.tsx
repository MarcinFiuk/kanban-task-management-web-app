import { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Overlay from './components/Overlay';
import { Modal } from './components/Modal';
import TaskForm from './components/Forms/TaskForm';
import BoardFrom from './components/Forms/BoardFrom';

import OpenNav from './assets/icon-show-sidebar.svg';

interface ResponseType {
    name: string;
    columns: {
        name: string;
        tasks: {
            description: string;
            status: string;
            subtasks: { title: string; isCompleted: boolean }[];
            title: string;
        }[];
    }[];
}
[];

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState({
        task: false,
        board: false,
    });

    return (
        <div className={`relative ${darkMode ? 'dark' : ''}`}>
            <div className='md:hidden'>
                <Overlay open={isNavOpen} />
            </div>
            <Header
                darkMode={darkMode}
                setToggleNav={setIsNavOpen}
                isOpen={isNavOpen}
                openModal={() =>
                    setIsModalOpen((prev) => {
                        return { ...prev, task: true };
                    })
                }
            />
            <Navigation
                darkMode={darkMode}
                isOpen={isNavOpen}
                setCloseNav={setIsNavOpen}
                openModal={() =>
                    setIsModalOpen((prev) => {
                        return { ...prev, board: true };
                    })
                }
            />
            <Modal
                isOpen={isModalOpen.board || isModalOpen.task}
                setCloseDialog={() =>
                    setIsModalOpen({ task: false, board: false })
                }
            >
                {isModalOpen.task && (
                    <TaskForm
                        object={{}}
                        setCloseDialog={() =>
                            setIsModalOpen((prev) => {
                                return { ...prev, task: false };
                            })
                        }
                    />
                )}
                {isModalOpen.board && (
                    <BoardFrom
                        object={{}}
                        setCloseDialog={() =>
                            setIsModalOpen((prev) => {
                                return { ...prev, board: false };
                            })
                        }
                    />
                )}
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
