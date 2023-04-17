//NOTE:props drilling... maybe its a good without Logo component?
// import { useRef } from 'react';

import ButtonPrimary from './ButtonPrimary';
import Logo from './Logo';

import AddTaskIcon from './../assets/icon-add-task-mobile.svg';
import EllipsisIcon from './../assets/icon-vertical-ellipsis.svg';
import ChevronIcon from './../assets/icon-chevron-down.svg';

type HeaderProps = {
    darkMode: boolean;
    isOpen: boolean;
    setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ darkMode, setToggleNav, isOpen }: HeaderProps) => {
    return (
        <>
            <header
                className={`relative flex flex-nowrap gap-4 md:gap-6 md:border-b 2xl:border-x md:border-linesLight bg-white px-4 md:px-6`}
            >
                <div className={`md:border-r md:border-r-linesLight`}>
                    <div className='flex items-center w-6 md:w-44 lg:w-46 h-full'>
                        <Logo darkMode={darkMode} />
                    </div>
                    <div
                        className={`hidden md:block ${
                            isOpen ? 'md:w-59 lg:w-69 ease-in' : 'w-0 ease-out'
                        } duration-500 `}
                    ></div>
                </div>

                <div className='flex mr-auto items-center gap-2'>
                    <h1 className='text-headingL md:text-headingXL lg:text-headingXXL'>
                        Platform Launch
                    </h1>
                    <button
                        onClick={() => setToggleNav(!isOpen)}
                        className={`md:hidden ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        } duration-500`}
                    >
                        <img src={ChevronIcon} alt='chevron' />
                    </button>
                </div>
                <div className='flex py-4 w-[68px] md:w-[193px]'>
                    <ButtonPrimary classes='md:hidden py-2.5 bg-mainPurple basis-12'>
                        <img src={AddTaskIcon} alt='add task' />
                    </ButtonPrimary>
                    <ButtonPrimary classes='hidden md:block  bg-mainPurple w-41'>
                        + Add New Task
                    </ButtonPrimary>
                    <ButtonPrimary classes='py-2 basis-5 md:w-7'>
                        <img
                            src={EllipsisIcon}
                            alt='ellipsis'
                            className='h-4 md:h-5'
                        />
                    </ButtonPrimary>
                </div>
            </header>
        </>
    );
};

export default Header;
