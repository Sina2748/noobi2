import Head from 'next/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import MealPage from '../../components/mealPage'

function Offer () {
    return (
    <div >
      <Head>
        <title>Noobi Food Production</title>
        <meta name="description" content="Generated by Sina Samii" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="h-fit">        
            



        <MealPage />



            
      </main>
      <Footer />
    </div>
    )
}

export default Offer;