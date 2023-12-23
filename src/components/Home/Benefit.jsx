
const Benefit = () => {
    return (
        <div className='mt-8'>
            {/* <h2 classNameName='text-center text-2xl font-bold my-8'>Benefited people List</h2>
            <p><span classNameName='text-xl font-bold'>1. Student : </span> A student can use this website to develop his study system. To use this website a student can easily open many task and move it TODO LIST, ONGOING LIST, COMPLETE LIST. So a student can easily see which task complete and which task not complete. </p>
            <p classNameName='mt-4'><span classNameName='text-xl font-bold'>2. BusinessMan : </span> A business man can easiy use this website in his business. A Businessman can open a task or survey for his product sell and get much information for more sell. </p> */}

            <h2 className='text-center text-3xl font-bold '>Benefited people List</h2>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">NO -1</span>
                                <span className="mt-1 text-gray-500 text-sm"></span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">STUDENT :</h2>
                                <p className="leading-relaxed">A student can use this website to develop his study system. To use this website a student can easily open many task and move it TODO LIST, ONGOING LIST, COMPLETE LIST. So a student can easily see which task complete and which task not complete.</p>
                                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="py-8 flex flex-wrap md:flex-nowrap" data-aos="fade-up"
                            data-aos-duration="3000">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">No - 2</span>
                                <span className="mt-1 text-gray-500 text-sm"></span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">BusinessMan :</h2>
                                <p className="leading-relaxed">A business man can easiy use this website in his business. A Businessman can open a task or survey for his product sell and get much information for more sell.</p>
                                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefit;