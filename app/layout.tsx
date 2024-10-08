import styles from '../styles/Samurai.module.css'
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'OrdVillage',
  description: 'The first clan-wars Ordinals community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      <body>
        <div className={styles.topnavbar}>
          <div className={styles.navLeft}>
            <Link href="/wallet_checker">Wallet checker</Link>
          </div>
          <div className={styles.navCenter}>
            <Link href="/" className='text-3xl'>The first clan-wars Ordinals community</Link>
            <h1>最初のクラン戦争オーディナル・コミュニティ</h1>
          </div>
          <div className={styles.navRight}>
            <Link href="https://x.com/OrdVillage">Twitter</Link>
            <Link href="https://discord.gg/9YGjRX9kdt">Discord</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}