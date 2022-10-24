import Link from 'next/link'


function card (props) {

  
    return (

<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm ">
  <Link href={`/offers/${props.id}`}>
    <a  className="relative">

      <img 
      className="rounded-t-lg " 
      src={props.img}     
      alt={props.imgAlt}  />

      <div className="flex space-x-2 justify-center absolute bottom-44 left-2">
        <span className="text-md inline-block py-2 px-2 leading-none text-center whitespace-nowrap align-baseline font-body bg-primary-400 text-primary-900 rounded-full">£ {props.price}</span>
      </div>
     
    </a>
    </Link>

    <div className="flex space-x-2 justify-center pt-3">
        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-primary-800 text-white rounded">
            Cooked on {props.day} {props.time}
        </span>

        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
            {props.mealsLeft} Meals Left
        </span>

        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-primary-600 text-primary-900 rounded capitalize">
            {props.neighborhood}
        </span>
    </div>

    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2 capitalize">{props.title}</h5>
      <p className="text-gray-700 text-base mb-4">
        {props.text}
      </p>
      <Link  href={`/offers/${props.id}`}>
      <a className=" inline-block px-6  py-3 bg-primary-700 text-white font-medium text-md leading-tight  rounded-md shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out">
        Order Now 
      </a>
      </Link>
    </div>
  </div>
</div>


    )
}

export default card;