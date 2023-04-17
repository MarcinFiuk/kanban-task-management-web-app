import BoardIcon from '../assets/icon-board.svg';
import LightModeIcon from '../assets/icon-light-theme.svg';
import DarkModeIcon from '../assets/icon-dark-theme.svg';

type NavProps = { darkMode: boolean; isOpen: boolean };

const Navigation = (props: NavProps) => {
    const { darkMode, isOpen } = props;

    return (
        <div className='absolute left-1/2 top-20 -translate-x-1/2'>
            <div
                className={`min-w-fit bg-white rounded-lg py-4 shadow-custom ${
                    isOpen
                        ? 'scale-y-100 -translate-y-0'
                        : 'scale-y-0 -translate-y-4'
                } duration-500 origin-top`}
            >
                <div className='text-headingS text-mediumGrey mb-4'>
                    <p className='uppercase ps-6 mb-5 tracking-[0.2em]'>
                        all boards (3)
                    </p>
                    <button className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full'>
                        <img src={BoardIcon} alt='' role='none' />
                        <p>Platform Lunch1</p>
                    </button>
                    <button className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full'>
                        <img src={BoardIcon} alt='' role='none' />
                        Platform Lunch2
                    </button>
                    <button className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full'>
                        <img src={BoardIcon} alt='' role='none' />
                        Platform Lunch3
                    </button>
                    <button className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full capitalize text-mainPurple'>
                        <svg
                            width='16'
                            height='16'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                                fill='#635FC7'
                            />
                        </svg>
                        + Create New Board
                    </button>
                </div>
                <div className=' flex  justify-center items-center w-60 h-12 rounded-md bg-grayLight ms-4 me-3'>
                    <label htmlFor='light' className=''>
                        <img src={LightModeIcon} alt='LightModeIcon' />
                    </label>
                    <input
                        type='checkbox'
                        name='darkLightMode'
                        id={darkMode ? 'dark' : 'light'}
                        // onChange={()={}}
                        className='toggle'
                    />
                    <label
                        htmlFor='dark'
                        className='relative flex cursor-pointer'
                    >
                        <img src={DarkModeIcon} alt='DarkModeIcon' />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
