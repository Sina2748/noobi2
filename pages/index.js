import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CTA from '../components/cta';
import CardGrid from '../components/cardGrid';
import Testimonial from '../components/testimonial';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Noobi Food Production</title>
        <meta name="description" content="Generated by Sina Samii" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="h-fit">        
        <Hero />
        
        <CardGrid i={6} />
        <CTA />
        <Testimonial />

      </main>
      <Footer />
    </div>
  )
}
