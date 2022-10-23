import Card from '../components/card';
import mealJsonAll from "../data/mealJson";
import img1 from "../public/assets/zer.webp";
import img2 from "../public/assets/hal.webp";
import img3 from "../public/assets/ash.webp";
import img4 from "../public/assets/tah.webp";
import img5 from "../public/assets/ghe.webp";
import img6 from "../public/assets/fes.webp";
import { matchesMiddleware } from 'next/dist/shared/lib/router/router';

function CardGrid (props) {
      const mealJson = mealJsonAll.slice(0,props.i);
      console.log("mealJson", mealJson);
    return (

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 ml-6 md:ml-0 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pick and Order one of our Meal Deals</h2>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {mealJson.map(meal => {
                  return (
            <div>
                <Card  key={meal.id}
                  price={meal.price}
                  img={meal.heroImg}
                  imgAlt={meal.heroImgAlt}
                  title={meal.title}
                  text={meal.infoText}
                  // time={meal.cookingTime}
                  mealsLeft={meal.totalSum - meal.orderSum}
/>
            </div>
                  )
            } )}

          {/* <div>
                <Card img={img1} title="Barberries and Rice" text="Zhereshk or Barberry is a kind of bery found in dry and warm places. It has a sour and rich tase with amplifies when fried with a litle suger. adding it to rice ... " time="Wednesday at 8pm" mealsLeft="2" />
          </div> */}




          {/* <div>
                <Card img={img2} title="Halim and cinamon" text="Zhereshk or Barberry is a kind of bery found in dry and warm places. It has a sour and rich tase with amplifies when fried with a litle suger. adding it to rice ... " time="Thursday at 8pm" mealsLeft="3" />
          </div>
          <div>
                <Card img={img3} title="ash reshte" text="Zhereshk or Barberry is a kind of bery found in dry and warm places. It has a sour and rich tase with amplifies when fried with a litle suger. adding it to rice ... " time="Friday at 8pm" mealsLeft="5" />
          </div>
          <div>
                <Card img={img4} title="tah chin" text="Zhereshk or Barberry is a kind of bery found in dry and warm places. It has a sour and rich tase with amplifies when fried with a litle suger. adding it to rice ... " time="Saturday at 8pm" mealsLeft="5" />
          </div>
          <div>
                <Card img={img5} title="gheymeh" text="Zhereshk or Barberry is a kind of bery found in dry and warm places. It has a sour and rich tase with amplifies when fried with a litle suger. adding it to rice ... " time="Sunday at 8pm" mealsLeft="6" />
          </div>
          <div>
                <Card img={img6} title="fesenjoon" text="Zhereshk or Barberry is a kind of bery found in dry and warm places. It has a sour and rich tase with amplifies when fried with a litle suger. adding it to rice ... " time="Monday at 8pm" mealsLeft="8" />
          </div> */}

      </div>
  </div>
</section>

    )
 }

 export default CardGrid;