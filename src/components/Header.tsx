//NOTE:props drilling... maybe its a good without Logo component?

import Logo from './Logo';

type HeaderProps = { darkMode: boolean };

const Header = (props: HeaderProps) => {
    const { darkMode } = props;
    return (
        <div>
            <Logo darkMode={darkMode} />
        </div>
    );
};

export default Header;
