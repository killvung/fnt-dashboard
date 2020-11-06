import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Page2() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2>Page 2</h2>
            </main>
        </>
    )
}
