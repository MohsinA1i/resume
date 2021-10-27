import styles from './introduction.module.scss';

import { FC } from 'react';

const Introduction: FC = () => {
    return (
        <section className={styles['section']}>
            <div className={styles['content']}>
                <h5 className={styles['sub-heading']}>I am</h5>
                <h1 className={styles['name']}>Mohsin Ali</h1>
                <h5 className={[styles['description'], styles['sub-heading']].join(' ')}>
                    <span>I have worked </span>
                    <span>as a freelancer</span>
                </h5>
            </div>
        </section>
    );
};

export default Introduction;
