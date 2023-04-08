import BoardIcon from '../assets/icon-board.svg';
import LightModeIcon from '../assets/icon-light-theme.svg';
import DarkModeIcon from '../assets/icon-dark-theme.svg';

type NavProps = { darkMode: boolean };

const Navigation = (props: NavProps) => {
    const { darkMode } = props;

    return (
        <div className='absolute left-1/2 top-20 -translate-x-1/2'>
            <div className='min-w-fit bg-white rounded-lg py-4 shadow-custom '>
                <div className='text-headingS text-mediumGrey mb-4'>
                    <p className='uppercase ps-6 mb-5 tracking-[0.2em]'>
                        all boards (3)
                    </p>
                    <div className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full'>
                        <img src={BoardIcon} alt='BoardIcon' />
                        <p>Platform Lunch1</p>
                    </div>
                    <div className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full'>
                        <img src={BoardIcon} alt='BoardIcon' />
                        Platform Lunch2
                    </div>
                    <div className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full'>
                        <img src={BoardIcon} alt='BoardIcon' />
                        Platform Lunch3
                    </div>

                    <div className='flex gap-3 py-3.5 w-60 ps-6 me-6 rounded-e-full capitalize text-mainPurple'>
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
                    </div>
                </div>
                <div className=' flex  justify-center items-center w-60 h-12 rounded-md bg-grayLight ms-4 me-3'>
                    <label htmlFor='light' className=''>
                        <img src={LightModeIcon} alt='LightModeIcon' />
                    </label>
                    <input
                        type='checkbox'
                        name='darkLightMode'
                        id={darkMode ? 'dark' : 'light'}
                        // onChange={() => }
                        className='absolute opacity-0 -top-96 -left-96'
                    />
                    <label
                        htmlFor='dark'
                        className={`relative flex cursor-pointer before:w-10 before:h-5 before:mx-6 before:bg-mainPurple before:rounded-xl after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:w-3.5 after:h-3.5 after:mx-6 after:bg-white after:rounded-full ${
                            darkMode
                                ? 'after:translate-x-0'
                                : 'after:translate-x-5'
                        } after:duration-300`}
                    >
                        <img src={DarkModeIcon} alt='DarkModeIcon' />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
