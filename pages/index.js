import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <meta name="Airbnb" content="Airbnb Clone" />
        <link rel="icon" href="/airbnb.png" />
      </Head>

      <Header />
      <Banner />
      <main>
        <section className="px-8 pt-6 mx-auto">
          <h2 className="pb-5 text-2xl font-semibold">Local Stays</h2>

          {/* Pull data from destinations.json */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))}

          
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch(
    'https://api.npoint.io/2ee15f88aa41220f0d95'
  ).then((res) => res.json())
  return {
    props: {
      exploreData,
    },
  }
}


