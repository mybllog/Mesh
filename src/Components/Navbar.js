import React, { useState, useEffect } from 'react';
//import mesh from "../assets/images/Mesh.png";
import AuthModal from '../Pages/AuthModal';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isScrolled, setIsScrolled] = useState(true)
    const [showModal , setShowModal] =  useState(false)
    const [textColor , setTextColor] = useState('text-white')

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleShowModal = () =>{
        setShowModal(true)
    }

    const handleCloseModal =() =>{
        setShowModal(false)
    }
    useEffect(()=>{
        const handleScroll = () =>{
            const scrollDown = window.scrollY;
            if(scrollDown > 50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
            //setIsScrolled(scrollDown >50); 
        }
        handleScroll()
        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }

    },[])
    // Function to check the background color and set the text color accordingly
    useEffect(() => {
        const checkBackgroundColor = () => {
            const navbar = document.querySelector('header')
            if (navbar) {
                const backgroundColor = window.getComputedStyle(navbar).backgroundColor; // Get its background color
                const isTransparent = backgroundColor === 'rgba(0, 0, 0, 0)'; 
                //const rgb = backgroundColor.match(/\d+/g); // Extract RGB values
                if (isTransparent) {
                    setTextColor('text-black')
                    /*const brightness = Math.sqrt(
                        0.299 * (rgb[0] ** 2) + // Red
                        0.587 * (rgb[1] ** 2) + // Green
                        0.114 * (rgb[2] ** 2)   // Blue
                    );*/
                   // setIsDarkBackground(brightness < 128); // If brightness is low, it’s a dark background
                }else{
                    setTextColor('text-white')
                }
            }
        }

        checkBackgroundColor();
        window.addEventListener('resize', checkBackgroundColor); // Check on resize

        return () => window.removeEventListener('resize', checkBackgroundColor);
    }, []);

    return (
        <div>
            <header className= 'w-screen fixed top-0 z-50  bg-white'>
                <nav className="max-w-[1728px] mx-auto px-4 py-2 flex gap-[6.19%] items-center">
                    <div className='flex-shrink-0 w-[11.48vw] mr-[19.10vw] pl-3'>
                    <svg width="56" height="17" viewBox="0 0 56 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4375 10.5859L15.75 0.109375H22.2188V0.542969H21.7031C21.2344 0.542969 20.8594 0.625 20.5781 0.789062C20.3828 0.898437 20.2266 1.08203 20.1094 1.33984C20.0234 1.52734 19.9805 2.01562 19.9805 2.80469V13.2812C19.9805 14.0938 20.0234 14.6016 20.1094 14.8047C20.1953 15.0078 20.3711 15.1875 20.6367 15.3438C20.9023 15.4922 21.2578 15.5664 21.7031 15.5664H22.2188V16H13.9219V15.5664H14.4375C14.9062 15.5664 15.2812 15.4844 15.5625 15.3203C15.7578 15.2109 15.9141 15.0234 16.0312 14.7578C16.1172 14.5703 16.1602 14.0781 16.1602 13.2812V1.50391L10.0664 16H9.78516L3.59766 1.60938V12.8008C3.59766 13.582 3.61719 14.0625 3.65625 14.2422C3.75781 14.6328 3.97656 14.9531 4.3125 15.2031C4.65625 15.4453 5.19141 15.5664 5.91797 15.5664V16H0.480469V15.5664H0.644531C0.996094 15.5742 1.32422 15.5195 1.62891 15.4023C1.93359 15.2773 2.16406 15.1133 2.32031 14.9102C2.47656 14.707 2.59766 14.4219 2.68359 14.0547C2.69922 13.9688 2.70703 13.5703 2.70703 12.8594V2.80469C2.70703 2 2.66406 1.5 2.57812 1.30469C2.49219 1.10156 2.31641 0.925781 2.05078 0.777344C1.78516 0.621094 1.42969 0.542969 0.984375 0.542969H0.480469V0.109375H6.97266L11.4375 10.5859ZM32.7539 10.1289H26.7422C26.8125 11.582 27.1992 12.7305 27.9023 13.5742C28.4414 14.2227 29.0898 14.5469 29.8477 14.5469C30.3164 14.5469 30.7422 14.418 31.125 14.1602C31.5078 13.8945 31.918 13.4219 32.3555 12.7422L32.7539 13C32.1602 14.2109 31.5039 15.0703 30.7852 15.5781C30.0664 16.0781 29.2344 16.3281 28.2891 16.3281C26.6641 16.3281 25.4336 15.7031 24.5977 14.4531C23.9258 13.4453 23.5898 12.1953 23.5898 10.7031C23.5898 8.875 24.082 7.42188 25.0664 6.34375C26.0586 5.25781 27.2188 4.71484 28.5469 4.71484C29.6562 4.71484 30.6172 5.17188 31.4297 6.08594C32.25 6.99219 32.6914 8.33984 32.7539 10.1289ZM29.8711 9.34375C29.8711 8.08594 29.8008 7.22266 29.6602 6.75391C29.5273 6.28516 29.3164 5.92969 29.0273 5.6875C28.8633 5.54688 28.6445 5.47656 28.3711 5.47656C27.9648 5.47656 27.6328 5.67578 27.375 6.07422C26.9141 6.76953 26.6836 7.72266 26.6836 8.93359V9.34375H29.8711ZM41.0625 4.73828L41.2383 8.47656H40.8398C40.3633 7.36719 39.8672 6.60938 39.3516 6.20312C38.8438 5.79688 38.3359 5.59375 37.8281 5.59375C37.5078 5.59375 37.2344 5.70312 37.0078 5.92188C36.7812 6.13281 36.668 6.37891 36.668 6.66016C36.668 6.87109 36.7461 7.07422 36.9023 7.26953C37.1523 7.58984 37.8516 8.14062 39 8.92188C40.1484 9.69531 40.9023 10.3555 41.2617 10.9023C41.6289 11.4414 41.8125 12.0469 41.8125 12.7188C41.8125 13.3281 41.6602 13.9258 41.3555 14.5117C41.0508 15.0977 40.6211 15.5469 40.0664 15.8594C39.5117 16.1719 38.8984 16.3281 38.2266 16.3281C37.7031 16.3281 37.0039 16.1641 36.1289 15.8359C35.8945 15.75 35.7344 15.707 35.6484 15.707C35.3906 15.707 35.1758 15.9023 35.0039 16.293H34.6172L34.4297 12.3555H34.8281C35.1797 13.3867 35.6602 14.1602 36.2695 14.6758C36.8867 15.1914 37.4688 15.4492 38.0156 15.4492C38.3906 15.4492 38.6953 15.3359 38.9297 15.1094C39.1719 14.875 39.293 14.5938 39.293 14.2656C39.293 13.8906 39.1758 13.5664 38.9414 13.293C38.707 13.0195 38.1836 12.6055 37.3711 12.0508C36.1758 11.2227 35.4023 10.5898 35.0508 10.1523C34.5352 9.51172 34.2773 8.80469 34.2773 8.03125C34.2773 7.1875 34.5664 6.42578 35.1445 5.74609C35.7305 5.05859 36.5742 4.71484 37.6758 4.71484C38.2695 4.71484 38.8438 4.85938 39.3984 5.14844C39.6094 5.26562 39.7812 5.32422 39.9141 5.32422C40.0547 5.32422 40.168 5.29688 40.2539 5.24219C40.3398 5.17969 40.4766 5.01172 40.6641 4.73828H41.0625ZM47.9648 0.109375V6.44922C48.5664 5.81641 49.1172 5.37109 49.6172 5.11328C50.1172 4.84766 50.6367 4.71484 51.1758 4.71484C51.8633 4.71484 52.4492 4.91016 52.9336 5.30078C53.4258 5.69141 53.75 6.15234 53.9062 6.68359C54.0703 7.20703 54.1523 8.09375 54.1523 9.34375V13.6211C54.1523 14.457 54.2305 14.9805 54.3867 15.1914C54.543 15.3945 54.8594 15.5234 55.3359 15.5781V16H49.7812V15.5781C50.1719 15.5234 50.4648 15.3672 50.6602 15.1094C50.8008 14.9062 50.8711 14.4102 50.8711 13.6211V8.73438C50.8711 7.82812 50.8359 7.26172 50.7656 7.03516C50.6953 6.80078 50.5742 6.62109 50.4023 6.49609C50.2383 6.36328 50.0508 6.29688 49.8398 6.29688C49.5273 6.29688 49.2227 6.40625 48.9258 6.625C48.6289 6.83594 48.3086 7.21094 47.9648 7.75V13.6211C47.9648 14.4023 48.0234 14.8906 48.1406 15.0859C48.2891 15.3516 48.5938 15.5156 49.0547 15.5781V16H43.5V15.5781C43.9609 15.5312 44.2891 15.3828 44.4844 15.1328C44.6172 14.9609 44.6836 14.457 44.6836 13.6211V2.48828C44.6836 1.66016 44.6055 1.14453 44.4492 0.941406C44.3008 0.738281 43.9844 0.605469 43.5 0.542969V0.109375H47.9648Z" fill="black"/>
</svg>

                    </div>
                    <div className={`hidden lg:flex  gap-8 justify-end float-end relative left-28 ${textColor} `}>
                        <a
                            href="/"
                        >
                           <text  className={` text-black  hover:text-blue-400 transition-colors text-base text-center font-bold not-italic`}>Home</text> 
                        </a>
                        <a
                            href="/products"
                           
                        >
                           <text   className={` text-black hover:text-blue-400 transition-colors text-base text-center font-bold not-italic`}>Products</text> 
                        </a>
                        <a
                            href="/about"
                        >
                            <text  className={`  text-black hover:text-blue-400 transition-colors text-base text-center font-bold not-italic`}>About us</text>
                        </a>
                        <a
                            href="/career"
                           
                        >
                           <text  className={`  text-black hover:text-blue-400 transition-colors text-base text-center font-bold not-italic`}>Career</text> 
                        </a>
                        <a
                            href="/events"
                        >
                           <text  className={` text-black  hover:text-blue-400 transition-colors text-base text-center font-bold not-italic`}>Events</text>
                        </a>
                    </div>
                    <div className="hidden sm:flex justify-center gap-6 lg:w-36 lg:h-10 bg-[#D9D9D9] rounded-lg relative left-20 cursor-pointer">
                        <button className="w-[16.37vw] text-center" onClick={handleShowModal}>
                            <p className="mr-2 font-bold">Login</p>
                        </button>
                        <AuthModal showModal={showModal} handleClose={handleCloseModal}/>
                    </div>

                    {/* Hamburger Icon for small screens */}
                    <div className="md:hidden relative left-40">
                        <button onClick={toggleOpen} className="focus:outline-none">
                            <svg
                                className={` w-6 h-6`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </nav>
                {/* Dropdown menu for small screens */}
                {isOpen && (
                    <div className="md:hidden bg-white">
                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                            Home
                        </a>
                        <a href="/products" className="block px-4 py-2 hover:bg-gray-100">
                            Products
                        </a>
                        <a href="/about" className="block px-4 py-2 hover:bg-gray-100">
                            About us
                        </a>
                        <a href="/career" className="block px-4 py-2 hover:bg-gray-100">
                            Career
                        </a>
                        <a href="/events" className="block px-4 py-2 hover:bg-gray-100">
                            Events
                        </a>
                        <div className="flex justify-center gap-6 lg:w-36 lg:h-10 bg-[#D9D9D9] rounded-lg cursor-pointer">
                            <button className="w-[16.37vw] text-black text-center">
                                <p className="mr-2 font-bold">Login</p>
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
