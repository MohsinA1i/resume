import styles from './side-bar-layout.module.scss';

import { FC, useMemo } from 'react';
import SideBar from '../SideBar';

interface LayoutProps {
    open: boolean;
}

const Layout: FC<LayoutProps> = ({ open, children }) => {
    const containerClass = useMemo(() => {
        const containerClasses = [styles['container']];
        if (open) containerClasses.push(styles['side-bar--open']);
        return containerClasses.join(' ');
    }, [open]);

    return (
        <div className={containerClass}>
            <SideBar />
            <div className={styles['main']}>{children}</div>
        </div>
    );
};

export default Layout;