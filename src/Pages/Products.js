import React from 'react';
import img2 from "../assets/images/Rectangle 10.png";
import img3 from "../assets/images/middle quick links.png";
import img4 from "../assets/images/Rectangle 23.png";
import img5 from "../assets/images/Rectangle 8.png";

const Products = () => {
  return (
    <div className='relative w-full h-full z-20 overflow-x-hidden px-4 lg:px-0'>
      <div className='flex flex-col lg:flex-row items-center justify-center md:justify-start lg:relative lg:left-16 space-y-8 lg:space-y-0 lg:space-x-16 my-20'>
        <div className='lg:w-[500px] lg:h-[300px] text-black space-y-3'>
          <h1 className='font-bold font-newRomain text-3xl lg:text-5xl leading-tight lg:leading-10'>
            Digital experiences <br /> tailored to your unique <br /> needs
          </h1>
          <p className='font-Opensans font-bold text-base leading-6 lg:leading-5 py-4 lg:py-6'>
            We build platforms, products, and services that help create a simple, joined-up, and personalized experience for everyone.
          </p>
          <div className='flex py-8 lg:py-16 space-x-8 lg:space-x-12'>
            <div className='flex space-x-3 lg:space-x-9'>
              <p className='w-10 h-14 font-bold font-newRomain text-[#23A6F0] text-4xl lg:text-6xl'>00</p>
              <p>Projects <br /> Completed</p>
            </div>
            <div className='flex space-x-3 lg:space-x-8'>
              <p className='w-10 h-14 font-bold font-newRomain text-[#23A6F0] text-4xl lg:text-6xl'>00</p>
              <p>Customers <br /> Reviews</p>
            </div>
          </div>
        </div>
        <img src={img2} alt='Product Visual' className='w-full lg:w-[522px] h-auto lg:h-[401px]' />
      </div>

      <div className='flex justify-center md:justify-start lg:relative lg:left-16 my-10'>
        <img src={img3} alt='Quick Links' className='w-full lg:w-[1048px] h-auto lg:h-[273px]' />
      </div>

      <div className='my-10 lg:my-20 px-2 lg:px-0 lg:relative lg:left-16'>
        <p className='text-[#6DA8FF] font-newRomain font-bold text-lg'>News Products Update</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 lg:my-16'>
          <div className='flex space-x-4 lg:space-x-7'>
            <img src={img4} alt="News Update" className='w-20 h-auto lg:w-auto' />
            <p className='font-Opensans font-semibold text-sm leading-5'>
              We’re thrilled to announce the launch of our <br/> innovative real estate app, designed to transform <br/>the way you search for properties and manage<br/> real estate transactions.
            </p>
          </div>
          <div className='flex space-x-4 lg:space-x-7'>
            <img src={img4} alt="News Update" className='w-20 h-auto lg:w-auto' />
            <p className='font-Opensans font-semibold text-sm leading-5'>
            We’re thrilled to announce the launch of our <br/> innovative real estate app, designed to transform <br/>the way you search for properties and manage<br/> real estate transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <button className="text-white bg-[#23A6F0] px-6 py-2 rounded-lg w-40 lg:w-36">
          <p className="font-Opensans font-semibold text-base">Get started</p>
        </button>
      </div>

      <div className='my-10 lg:my-20 lg:relative lg:left-16'>
        <p className='font-newRomain font-bold text-lg text-[#6DA8FF]'>Products</p>
        <div className='bg-white w-full lg:w-[1064px] h-auto rounded-lg shadow-xl my-6 p-4'>
          <div className='flex items-start space-x-4 '>
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
    </div>
  );
};

export default Products;
