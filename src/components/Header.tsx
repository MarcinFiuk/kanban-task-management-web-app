//NOTE:props drilling... maybe its a good without Logo component?

import ButtonPrimary from './ButtonPrimary';
import Logo from './Logo';

import AddTaskIcon from './../assets/icon-add-task-mobile.svg';
import EllipsisIcon from './../assets/icon-vertical-ellipsis.svg';
import ChevronIcon from './../assets/icon-chevron-down.svg';

type HeaderProps = { darkMode: boolean };

const Header = (props: HeaderProps) => {
    const { darkMode } = props;

    //NOTE: potential solution for animation
    const a = 'md:w-[201px]';
    const b = 'md:w-[300px]';

    return (
        <header
            className={`flex flex-nowrap  gap-4 md:gap-6 border-b 2xl:border-x border-linesLight px-4 md:px-6`}
        >
            <div
                className={`flex items-center w-6  ${b} duration-500  md:border-r md:border-r-linesLight`}
            >
                <Logo darkMode={darkMode} />
            </div>

            <div className='flex flex-grow items-center gap-2'>
                <h1 className='text-headingL md:text-headingXL lg:text-headingXXL'>
                    Platform Launch
                </h1>
                <div className='md:hidden'>
                    <img src={ChevronIcon} alt='chevron' />
                </div>
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
    );
};

export default Header;
