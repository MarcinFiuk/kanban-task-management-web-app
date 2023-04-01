import LogoMobile from './../assets/logo-mobile.svg';
import LogoDark from './../assets/logo-dark.svg';
import LogoLight from './../assets/logo-light.svg';

type LogoProps = { darkMode: boolean };

const Logo = (props: LogoProps) => {
    const { darkMode } = props;
    return (
        <div className='bg-gray-600'>
            <div className='md:hidden'>
                <img src={LogoMobile} alt='logo' />
            </div>
            <div className='hidden md:block'>
                {!darkMode && <img src={LogoLight} alt='logo' />}
                {darkMode && <img src={LogoDark} alt='logo' />}
            </div>
        </div>
    );
};

export default Logo;
