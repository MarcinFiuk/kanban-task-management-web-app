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
        <header className='grid grid-cols-header p-4 items-center gap-4 last:mr-2'>
            <Logo darkMode={darkMode} />

            <div className='flex items-center gap-2'>
                <h1>Platform Launch</h1>
                <div className='md:hidden'>
                    <img src={Chevron} alt='chevron' />
                </div>
            </div>
            <div>
                <ButtonPrimary classes='md:hidden py-2.5 bg-mainPurple'>
                    <img src={AddTask} alt='add task' />
                </ButtonPrimary>
                <ButtonPrimary classes='hidden md:block  bg-mainPurple'>
                    + Add New Task
                </ButtonPrimary>{' '}
            </div>
            <ButtonPrimary classes='py-2'>
                <img src={Ellipsis} alt='ellipsis' className='h-4 md:h-5' />
            </ButtonPrimary>
        </header>
    );
};

export default Header;
