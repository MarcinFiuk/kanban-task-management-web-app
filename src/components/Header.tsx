//NOTE:props drilling... maybe its a good without Logo component?

import ButtonPrimary from './ButtonPrimary';
import Logo from './Logo';

import AddTask from './../assets/icon-add-task-mobile.svg';
import Ellipsis from './../assets/icon-vertical-ellipsis.svg';
import Chevron from './../assets/icon-chevron-down.svg';

type HeaderProps = { darkMode: boolean };

const Header = (props: HeaderProps) => {
    const { darkMode } = props;
    return (
        <header className='grid grid-cols-headerMobile md:grid-cols-headerDesktop p-4 md:px-6 items-center gap-4 md:gap-6 '>
            <Logo darkMode={darkMode} />

            <div className='flex items-center gap-2'>
                <h1 className='text-headingL md:text-headingXL lg:text-headingXXL'>
                    Platform Launch
                </h1>
                <div className='md:hidden'>
                    <img src={Chevron} alt='chevron' />
                </div>
            </div>
            <div className='flex'>
                <ButtonPrimary classes='md:hidden py-2.5 bg-mainPurple w-12'>
                    <img src={AddTask} alt='add task' />
                </ButtonPrimary>
                <ButtonPrimary classes='hidden md:block  bg-mainPurple w-41'>
                    + Add New Task
                </ButtonPrimary>{' '}
                <ButtonPrimary classes='py-2 w-5 md:w-7'>
                    <img src={Ellipsis} alt='ellipsis' className='h-4 md:h-5' />
                </ButtonPrimary>
            </div>
        </header>
    );
};

export default Header;
