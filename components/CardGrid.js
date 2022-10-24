import Card from './card';
import mealJsonAll from "../data/mealJson";


function CardGrid (props) {
      const mealJson = mealJsonAll.slice(0,props.i);
      
    return (

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 ml-6 md:ml-0 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pick and Order one of our Meal Deals</h2>
      </div>
      {/* <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {mealJson.map((meal) => 
                  
                  
            <div>
                <Card  
                  key={meal.id}
                  id={meal.id}
                  price={meal.price}
                  img={meal.heroImg}
                  imgAlt={meal.heroImgAlt}
                  title={meal.mealName}
                  text={meal.infoText}
                  day={meal.cookingTime.day}
                  time={meal.cookingTime.time}
                  mealsLeft={meal.totalSum - meal.orderSum}
                  neighborhood={meal.neighborhood}
                  />
            </div>
                  
             )} 



      </div> */}
  </div>
</section>

    )
 }

 export default CardGrid;