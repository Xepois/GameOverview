import { Kanit } from 'next/font/google';
import '../styles/globals.scss';
import styles from '../styles/main.module.scss';
import Header from '../components/header';

const kanit = Kanit({
    weight: '500',
    subsets: ['latin']
})

export const metadata = {
    title: "spotl.gg",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={kanit.className}>
            <head>
                <meta charset="UTF-8"></meta>
            </head>
            <body>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    )
}