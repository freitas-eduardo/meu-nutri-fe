import Image from 'next/image'
import styles from './page.module.scss'
import { Button } from 'antd';

export default function Home() {
  return (
    <main className={styles.main}>
     <Button type="primary">Button</Button>
    </main>
  )
}
