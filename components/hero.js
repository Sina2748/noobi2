



function Hero (props) {
    return (

<section className="  dark:bg-gray-900 bg-[url(../public/assets/hero.webp)] bg-cover bg-center py-36 w-screen  ">
    <div className="grid max-w-screen-2xl px-6 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 md:g-yellow-100 ">
        <div className="mr-auto place-self-center lg:col-span-7  bg-primary-50  rounded-md      
                        bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-200">
            <div className=" p-16">
                <h1 className="max-w-2xl  mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> Palatable Meal <br /> at your Table </h1>
                {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 bg-white">We deliver mouth watering food <br /> to your doorstep for free.</p> */}
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Order Now
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    About Our Food
                </a> 
            </div>
        </div>
              
    </div>
</section>


    )
}

export default Hero;