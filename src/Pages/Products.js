import React from 'react';
import img2 from "../assets/images/Rectangle 10.png";
import img3 from "../assets/images/middle quick links.png";
import img4 from "../assets/images/Rectangle 23.png";
import img5 from "../assets/images/Rectangle 8.png";
import { Helmet } from 'react-helmet';
const Products = () => {
  return (
    <>
      <Helmet>
    <title>Products - Digital experiences tailored to your unique needs</title>
    <meta name="description" content="Digital experiences tailored to your unique needs" />
    <meta name="keywords" content="customers, projects, products, news" />
  </Helmet>
    <div className='relative w-full h-full z-20 overflow-x-hidden px-4 lg:px-0'>
      <header className='flex justify-center  my-20'>
  <div className='flex flex-col lg:flex-row w-full  max-w-5xl md:max-w-5xl  xl:max-w-6xl  space-y-8 lg:space-y-0 lg:space-x-20'>
  <div className='lg:w-[800px] leading-8 text-black space-y-3 md:w-full md:flex md:flex-col md:items-center lg:items-start'>
  <h1 className='font-bold font-newRomain text-3xl lg:text-5xl leading-tight md:text-center lg:text-left'>
    Digital experiences tailored to your unique needs
  </h1>
  <p className='font-Opensans font-bold w-[409px] text-base leading-6 lg:leading-5 py-4 lg:py-6 md:text-center lg:text-left'>
    We build platforms, products, and services that help create a simple, joined-up, and personalized experience for everyone.
  </p>
  <div className='flex py-8 lg:py-16 space-x-28 md:space-x-28 lg:space-x-28 xl:space-x-28 md:w-full md:justify-center lg:justify-start xl:justify-start'>
    <div className='flex space-x-4 lg:space-x-8'>
      <p className='w-10 h-14 font-bold font-newRomain text-[#23A6F0] text-3xl lg:text-6xl'>00</p>
      <p className='w-10 h-14 font-newRomain font-normal text-black text-lg lg:text-2xl'>Projects <br /> Completed</p>
    </div>
    <div className='flex space-x-4 lg:space-x-8'>
      <p className='w-10 h-14 font-bold font-newRomain text-[#23A6F0] text-3xl lg:text-6xl'>00</p>
      <p className='w-10 h-14 font-newRomain font-normal text-black text-lg lg:text-2xl'>Customers <br /> Reviews</p>
    </div>
  </div>
</div>

    <img src={img2} alt='Visual representation of products offered' className='w-full lg:w-[522px] h-auto lg:h-[401px]' />
  </div>
</header>

    {/* Quick Links Section */}
      <section className='flex lg:flex-row justify-center my-10'>
        <img src={img3} alt='Quick Links for navigation' className='w-full xl:max-w-6xl h-auto lg:h-[273px]' />
      </section>

    {/* News Update Section */}
      <section className='my-10 lg:my-20 px-2 lg:px-0 flex justify-center'>
  <div className='w-full  xl:max-w-6xl'>
    <p className='text-[#6DA8FF] font-newRomain font-bold text-lg'>News Products Update</p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-8 lg:my-16'>
      <article className='flex space-x-4 lg:space-x-7'>
        <img src={img4} alt="News Update" className='w-20 h-auto lg:w-auto' />
        <p className='font-Opensans font-semibold text-sm leading-5'>
          We’re thrilled to announce the launch of our <br/> innovative real estate app, designed to transform <br/>the way you search for properties and manage<br/> real estate transactions.
        </p>
      </article>
      <article className='flex space-x-4 lg:space-x-7'>
        <img src={img4} alt="News Update" className='w-20 h-auto lg:w-auto' />
        <p className='font-Opensans font-semibold text-sm leading-5'>
          We’re thrilled to announce the launch of our <br/> innovative real estate app, designed to transform <br/>the way you search for properties and manage<br/> real estate transactions.
        </p>
      </article>
    </div>
  </div>
</section>

    {/* Call to Action Button */}
      <div className="flex justify-center my-5 ">
        <button className="text-white bg-[#23A6F0] px-6 py-2 rounded-lg w-40 lg:w-36">
          <p className="font-Opensans font-semibold text-base">Get started</p>
        </button>
      </div>

     {/* Products Section */}
      <section className='my-10 lg:my-20 flex justify-center'>
  <div className='w-full xl:max-w-6xl '>
    <p className='font-newRomain font-bold text-lg text-[#6DA8FF]'>Products</p>
    <div className='bg-white w-full h-auto rounded-lg shadow-xl my-6 p-4'>
      <div className='flex items-start space-x-4'>
        <img src={img5} alt="Product" className='w-16 h-14 rounded-xl' />
        <div>
          <h2 className='font-newRomain font-bold text-base'>Glover</h2>
          <p className='font-newRomain font-bold text-base'>
            Lorem ipsum dolor sit amet consectetur. At egestas eget ultrices duis hendrerit. Libero augue accumsan at a nulla. Amet odio enim proin a. Malesuada elementum mauris sed nulla leo.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </>
  );
};

export default Products;
