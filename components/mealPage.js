import React, { useState } from "react";

const mealPage = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
     


    <section className="px-4">   
        <div className=" dark:bg-gray-900  mx-auto max-w-screen-xl  md:flex items-start justify-center py-8  md:px-6 px-4 drop-shadow-lg bg-slate-50 m-4 p-4 rounded-xl">
            <div className="w-full  md:w-1/2 lg:w-3/5  md:block ">
                <img className="w-full rounded-3xl shadow-md" alt="img of a girl posing" src="/assets/zer.webp" />
                <img className="mt-6 w-full rounded-3xl shadow-md" alt="img of a girl posing" src="/assets/zer2.webp" />
            </div>




            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">Meal Name:</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        Fesenjoon with Rice
                    </h1>
                </div>

                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Time of Cooking</p>
                    <div className="flex items-center justify-center">
                        <p className="text-md leading-none text-gray-600 mr-3">Friday at 8:00 pm</p>

                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Neighborhood</p>

                    <div className="flex items-center justify-center">
                        <p className="text-md leading-none text-gray-600 mr-3">Finchley</p>

                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Price with Delivery</p>

                    <div className="flex items-center justify-center">
                        <p className="text-md leading-none text-gray-600 mr-3">£ 5.99</p>

                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Portion</p>

                    <div className="flex items-center justify-center">
                        <p className="text-md leading-none text-gray-600 mr-3">Good for 5 Adults</p>

                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-primary-700
						w-full
						py-4
						hover:bg-primary-900
                        shadow-md
                        rounded-md
                        mt-5
					"
                >

                    Add to my Cart
                </button>

                <div>
                    <p className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
 
                </div>

                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Shipping Info</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            You will be responsible for paying for your own shipping costs for returning your item but it's free. Shipping costs are nonrefundable
                        </div>
                    </div>
                </div>

                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">More about the Meal</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            If you have any questions on how to return your item to us, contact us.
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
};

export default mealPage;
