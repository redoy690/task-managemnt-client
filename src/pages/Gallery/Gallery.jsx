
import Container from '../../Shared/Container/Container';

const Gallery = () => {
    return (
        <div>
            <Container>
                <div className="flex justify-center ">
                    {/* <nav className="self-center w-full max-w-7xl  ">
                        <div className="flex flex-col lg:flex-row justify-around items-center border-b-2">
                            <h1 className="uppercase pl-5 py-4 text-xl font-sans font-bold">fashionhub</h1>
                            <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
                                <li className="hover:underline  underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                                    <a href="#">Home</a>
                                </li>
                                <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">Contact</a></li>
                                <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">Services</a></li>
                                <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">About</a></li>
                                <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                    href="#">Pricing</a></li>
                            </ul>
                            <div className=" text-center text-base pr-5  inline-flex"> <a href="#"
                                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i
                                    className="fa fa-twitter"></i></a> <a href="#"
                                        className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                            className="fa fa-instagram"></i></a> <a href="#"
                                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                    className="fa fa-facebook"></i></a> <a href="#"
                                                        className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                            className="fa fa-google"></i></a> <a href="#"
                                                                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                    className="fa fa-linkedin"></i></a> </div>
                        </div>
                    </nav> */}
                </div>
                <div className="flex justify-center  ">
                    <div className="flex flex-col items-center justify-center">

                        <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                                <div className="text-3xl mt-12 md:text-7xl font-bold ">
                                    Make Your Fashion Look More Charming</div>
                            </div>
                            <div
                                className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl " data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center" data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                                    </div>
                                    <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl " data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                                    </div>
                                </div>
                                <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl " data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
                                </div>
                                <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                    <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl " data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                                    </div>
                                    <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl " data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                                    </div>
                                </div>
                                <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl " data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            </Container>
        </div>
    );
};

export default Gallery;