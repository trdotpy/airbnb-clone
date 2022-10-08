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

          {/* Pull data from destinations.json -- Getting an error trying to map the JSON data because .map function only works on arrays */}
        </section>
      </main>
    </div>
  )
}

// export async function getStaticProps() {
//   const explore = await fetch('http://localhost:3000/destinations.json')
//   const exploreData = await explore.text()
//   return {
//     props: {
//       exploreData,
//     },
//   }
// }
