import styles from './icon-button.module.scss';

import { ButtonHTMLAttributes, FC } from 'react';

const IconButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button className={styles['icon-button']} {...props}>
            {children}
        </button>
    );
};

export default IconButton;