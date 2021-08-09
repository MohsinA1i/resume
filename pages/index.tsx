import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mohsin Ali | Software Developer</title>
                <meta name='description' content='Let me tell you about myself' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <h1>Hi</h1>
                <h3>This is Mohsin Ali</h3>
                <h3>I am a software developer who has worked</h3>
                <h3>in startups</h3>
                <h3>in corporations</h3>
                <h3>as a freelancer</h3>
                <h3>as an entrepreneur</h3>
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Home;
