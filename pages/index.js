import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Social Media Preview
        </title>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Social Media Preview Working?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content="https://cdn.hashnode.com/res/hashnode/image/upload/v1644938661983/J7uY6EVhp.png?auto=compress" />
      </Head>
      <h2>
        Hurray!!! The Website is Complete. Lets Try Social Media Preview Now
      </h2>
    </div>
  )
}
