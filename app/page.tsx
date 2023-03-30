import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
   <div className={styles.home}>
      <div>
        <h1>Hi My Name is Dylan</h1>
        <div>
          <Link href="/blog">Checkout My Blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact Me</Link>
        </div>
      </div>
   </div>
  )
}
