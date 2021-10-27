import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Fragment>
            <Head>
                <title>Mohsin Ali | Software Developer</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='description' content='Let me tell you about myself' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
};

export default MyApp;
