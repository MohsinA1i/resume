import styles from './header-layout.module.scss';

import { FC } from 'react';
import Header from '@components/Header';

interface LayoutProps {
    onMenu: () => void;
}

const Layout: FC<LayoutProps> = ({ onMenu, children }) => {

    return (
        <div className={styles['container']}>
            <Header onMenu={onMenu}/>
            <div className={styles['main']}>{children}</div>
        </div>
    );
};

export default Layout;