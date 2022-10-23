import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/nav';
import Footer from '../components/footer';
import CardGrid from '../components/CardGrid';

function Offers (props) {
    return (

    <div >
        <Head>
          <title>ٔNoobi Food Production</title>
          <meta name="description" content="Generated by Sina Samii" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Nav />
        <main className="h-fit">        
          
          
          <CardGrid i={9}/>

  
        </main>
        <Footer />
    </div>

    )

}

export default Offers