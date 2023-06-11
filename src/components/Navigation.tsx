import useAxios from '../hooks/useAxios';
import axios from './../apis/boardsAPI';

import BoardIcon from '../assets/icon-board.svg';
import LightModeIcon from '../assets/icon-light-theme.svg';
import DarkModeIcon from '../assets/icon-dark-theme.svg';
import HideNavbar from '../assets/icon-hide-sidebar.svg';

type NavProps = {
    darkMode: boolean;
    isOpen: boolean;
    setCloseNav: React.Dispatch<React.SetStateAction<boolean>>;
    openModal: () => void;
};

type BoardsType = string[];

const Navigation = (props: NavProps) => {
    const { darkMode, isOpen, openModal, setCloseNav } = props;

    const { data, error, loading } = useAxios<BoardsType>({
        axiosInstance: axios,
        method: 'get',
        url: '/boardsName',
    });

    const createNewBoardButton = (
        <button
            onClick={openModal}
            className='flex gap-3 py-3.5 w-60 lg:w-69 ps-6 lg:ps-8 me-6 md:me-5 rounded-e-full capitalize text-mainPurple'
        >
            <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z'
                    fill='#635FC7'
                />
            </svg>
            + Create New Board
        </button>
    );

    const boardsComponent =
        (loading && <p> LOADING...</p>) ||
        (!loading && error && <p>{error}</p>) ||
        (!loading && !error && !data && <nav>createNewBoardButton</nav>) ||
        (!loading && !error && data && (
            <nav>
                <ul>
                    {data.map((board) => {
                        return (
                            <li>
                                <button
                                    key={board}
                                    className='flex gap-3 py-3.5 w-60 lg:w-69 ps-6 lg:ps-8 me-6 md:me-5 rounded-e-full'
                                >
                                    <img src={BoardIcon} alt='' role='none' />
                                    {board}
                                </button>
                            </li>
                        );
                    })}
                    <li> {createNewBoardButton}</li>
                </ul>
            </nav>
        ));

    const boardsNumber =
        (data?.length === 0 && 'all boards (0)') ||
        (data && data.length > 0 && `all boards (${data.length})`) ||
        (!data && 'error');

    return (
        <aside className='absolute left-1/2 md:left-0 top-20 md:top-[68px] -translate-x-1/2 md:translate-x-0'>
            <div
                className={`flex flex-col md:min-h-[calc(100vh_-_68px)] bg-white rounded-lg md:rounded-none py-4 shadow-custom md:shadow-none ${
                    isOpen
                        ? 'scale-y-100 -translate-y-0 md:delay-500'
                        : 'scale-y-0 -translate-y-4 '
                } duration-500 origin-top 2xl:border-x 2xl:border-x-linesLight`}
            >
                {/* boards */}
                <div className=' text-headingS text-mediumGrey mb-4 md:mb-auto'>
                    <p className='uppercase ps-6 mb-5 tracking-[0.2em]'>
                        {boardsNumber}
                    </p>
                    {boardsComponent}
                </div>
                {/* light dark toggle */}
                <div className='flex justify-center items-center w-[235px] lg:w-[251px] h-12 rounded-md bg-grayLight ms-4 md:ms-3 lg:ms-6 me-3 lg:me-[25px] md:mb-4'>
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
                {/* hide sidebar */}
                <div className='mb-8'>
                    <button
                        onClick={() => setCloseNav(false)}
                        className='hidden md:flex gap-2 text-grayMedium text-left text-headingM w-full ps-6 lg:ps-8 py-3.5'
                    >
                        <img src={HideNavbar} alt='' role='none' />
                        Hide Sidebar
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Navigation;
