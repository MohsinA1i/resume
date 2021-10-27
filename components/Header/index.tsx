import styles from './header.module.scss';

import { FC } from 'react';
import Bars from '@components/Svg/Bars';
import IconButton from '@components/IconButton';

interface HeaderProps {
    onMenu: () => void
}

const Header: FC<HeaderProps> = ({ onMenu }) => {
    return (
        <header className={styles.header}>
            <IconButton onClick={onMenu}>
                <Bars width={'1.5rem'} height={'1.5rem'}/>
            </IconButton>
        </header>
    );
};

export default Header;