import React from 'react'
import img1 from "../assets/images/Rectangle 30.png"
import img2 from "../assets/images/Rectangle 34 (7).png"
import img3 from "../assets/images/Rectangle 32 (2).png"
import img4 from "../assets/images/Rectangle 33 (5).png"
import img5 from "../assets/images/Rectangle 33 (3).png"
import { Helmet } from 'react-helmet'
const About = () => {
  return (

   <>
     <Helmet>
    <title>About Us - Mesh</title>
    <meta name="description" content="Learn about Mesh, our mission, values, and what we do. Connect with us today!" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Open Graph Tags */}
    <meta property="og:title" content="About Us - Mesh" />
    <meta property="og:description" content="Learn about Mesh, our mission, values, and what we do. Connect with us today!" />
    <meta property="og:image" content="URL_to_your_image" />
    <meta property="og:url" content="URL_to_your_page" />
  </Helmet>
    <main className='w-full overflow-x-hidden'>
      {/* Mission Section */}
      <section className='bg-[#2F4F75] w-full h-auto py-20'>
      <div className='grid lg:grid-cols-2 xl:grid-cols-2 max-w-7xl xl:max-w-6xl md:max-w-5xl grid-cols-1 gap-4 items-center mx-auto'>
  <div className='flex flex-col items-center md:items-center lg:items-start text-white'>
    <h1 className='font-newRomain font-bold text-2xl lg:text-4xl leading-10 text-center md:text-center lg:text-left'>
      Our Mission @ Mesh
    </h1>
    <p className='font-Opensans font-semibold text-base lg:text-lg mt-6 leading-7 text-center md:text-center lg:text-left'>
      Our mission is to connect people with the services and products they need, 
      regardless of their location. We strive to introduce innovative methods that 
      enhance both the delivery and perception of these services, while leveraging 
      technology to simplify and improve everyday life.
    </p>
  </div>
  <div className='mt-6 lg:mt-0 flex justify-center lg:justify-start'>
    <img src={img1} alt='Mission' className='w-full max-w-xl xl:max-w-xl mx-auto opacity-90'/>
  </div>
</div>

      </section>

      {/* Values and What We Do Section */}
      <section className='flex flex-col justify-center items-center my-11 space-y-12 max-w-7xl mx-auto'>
  <p className='text-center font-newRomain font-normal text-2xl lg:text-4xl'>
    We <span className='text-[#EC5A1C]'>strive</span> daily to be the <span className='text-[#6DA8FF]'>pioneers</span> in <br className='hidden lg:block'/>
    <span className='text-[#EC5A1C]'>technology</span>
  </p>

  <div className='hidden md:flex lg:flex md:space-x-12 lg:space-x-12 my-14 justify-center md:justify-center lg:justify-start'>
  <div className='w-full md:w-1/2 lg:w-1/2 mt-8 md:mt-8 lg:mt-0 flex justify-center'>
    <img src={img2} alt='Values' className='mx-auto'/>
  </div>
  <div className='md:w-[520px] lg:w-[520px] md:mt-16 lg:mt-16'>
    <p className='text-[#EC1C1C] font-bold font-newRomain text-base leading-4 text-center md:text-center lg:text-left'>
      Our Values
    </p>
    <ul className='my-4 text-black font-Opensans font-semibold text-sm list-disc space-y-2 text-center md:text-center lg:text-left'>
      <li>Innovation: We push boundaries to find new, creative ways to solve problems.</li>
      <li>Customer First: Our users are at the heart of everything we do.</li>
      <li>Integrity: Transparency and honesty guide our every action.</li>
      <li>Excellence: We hold ourselves to the highest standards of quality and performance.</li>
    </ul>
  </div>
</div>


   {/* mobile view of our value*/}
  <section className=' lg:hidden  my-8 px-6 xl:hidden  md:hidden'>
  <div className='w-full lg:w-1/2 my-8 '>
          <img src={img2} alt='Our Team' className='w-full h-auto'/>
        </div>

        <div className='lg:w-1/2 mt-8 lg:mt-16'>
          <p className='text-[#EC5A1C] font-bold font-newRomain text-base leading-5'>
          Our Values
          </p>
          <ul className='mt-4 text-black font-Opensans font-semibold list-disc text-sm'>
             <li>Innovation: We push boundaries to find new, creative ways to solve problems.</li>
        <li>Customer First: Our users are at the heart of everything we do.</li>
        <li>Integrity: Transparency and honesty guide our every action.</li>
        <li>Excellence: We hold ourselves to the highest standards of quality and performance.</li>
          </ul>
        </div>
        
      </section>

      <div className='hidden md:flex lg:flex md:space-x-5 lg:space-x-12 my-8 justify-center md:justify-center lg:justify-start'>
  <div className='md:w-[520px] lg:w-[520px] md:mt-16 lg:mt-16'>
    <p className='text-[#6DA8FF] font-bold font-newRomain text-base leading-5 text-center md:text-center lg:text-left'>
      What We Do
    </p>
    <p className='mt-4 text-black font-Opensans font-semibold text-sm text-center md:text-center lg:text-left'>
      At Mesh, we specialize in developing cutting-edge digital solutions and offering expert 
      consultations tailored to your business needs. By leveraging the latest technology 
      and a customer-focused approach, we create personalized, seamless experiences 
      that help you stay ahead in a competitive market. Our commitment to innovation 
      and client success is what sets us apart.
    </p>
  </div>
  <div className='w-full md:w-1/2 lg:w-1/2 mt-8 md:mt-8 lg:mt-0 flex justify-center'>
    <img src={img3} alt='What We Do' className='mx-auto'/>
  </div>
</div>


    {/*mobile view of what we do*/}
  <div className=' lg:hidden my-8 px-6 xl:hidden  md:hidden'>
        <div className='lg:w-1/2 mt-8 lg:mt-16'>
          <p className='text-[#EC5A1C] font-bold font-newRomain text-base leading-5'>
          What We Do
          </p>
          <p className='mt-4 text-black font-Opensans font-semibold text-sm'>
          At Mesh, we specialize in developing cutting-edge digital solutions and offering expert 
        consultations tailored to your business needs. By leveraging the latest technology 
        and a customer-focused approach, we create personalized, seamless experiences 
        that help you stay ahead in a competitive market. Our commitment to innovation 
        and client success is what sets us apart.
          </p>
        </div>
        <div className='w-full lg:w-1/2 my-8 '>
          <img src={img3} alt='Our Team' className='w-full h-auto'/>
        </div>
      </div>
</section>

{/* Team Section */}
<section className='hidden md:flex lg:flex md:space-x-8 lg:space-x-8 my-8 max-w-6xl mx-auto justify-center md:justify-center lg:justify-start'>
  <div className='w-full md:w-1/2 lg:w-1/2 flex justify-center'>
    <img src={img4} alt='Our Team' className='mx-auto'/>
  </div>
  <div className='md:w-[490px] lg:w-[490px] mt-8 md:mt-8 lg:mt-16'>
    <p className='text-[#EC5A1C] font-bold font-newRomain text-base leading-5 text-center md:text-center lg:text-left'>
      Our Team
    </p>
    <p className='mt-4 text-black font-Opensans font-semibold text-sm text-center md:text-center lg:text-left'>
      Our team is made up of diverse, highly skilled professionals with expertise across various 
      industries who share a passion for innovation and delivering exceptional results. We believe 
      that collaboration, creativity, and a shared mission drive our success, enabling us to 
      consistently exceed client expectations and foster long-lasting partnerships.
    </p>
  </div>
</section>


        {/* mobile view of our team */}
      <section className=' lg:hidden my-8 px-6 xl:hidden  md:hidden'>
        <div className='lg:w-1/2 mt-8 lg:mt-16'>
          <p className='text-[#EC5A1C] font-bold font-newRomain text-base leading-5'>
            Our Team
          </p>
          <p className='mt-4 text-black font-Opensans font-semibold text-sm'>
            Our team is made up of diverse, highly skilled professionals with expertise across various 
            industries who share a passion for innovation and delivering exceptional results. We believe 
            that collaboration, creativity, and a shared mission drive our success, enabling us to 
            consistently exceed client expectations and foster long-lasting partnerships.
          </p>
        </div>
        <div className='w-full lg:w-1/2 my-8 '>
          <img src={img4} alt='Our Team' className='w-full h-auto'/>
        </div>
      </section>


      {/* Contact Us Section */}
      <section className='hidden md:flex lg:flex md:space-x-12 lg:space-x-12 my-8 max-w-5xl mx-auto justify-center md:justify-center lg:justify-start'>
  <div className='md:w-[520px] lg:w-[520px]'>
    <p className='text-[#461CEC] font-bold font-newRomain text-base leading-5 text-center md:text-center lg:text-left'>
      Contact Us
    </p>
    <p className='mt-4 text-black font-Opensans font-semibold text-sm text-center md:text-center lg:text-left'>
      Ready to learn more or partner with us? Contact us today to see how we can help you 
      achieve your goals. We’d love to hear from you.
    </p>

    {/* Contact Form */}
    <form className='space-y-4 mt-4'>
      <div className='flex flex-col md:flex-row lg:flex-row md:space-x-3 lg:space-x-4'>
        <div className='w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0 lg:mb-0'>
          <label htmlFor='fullName' className='text-black'>Full Name:</label>
          <input type='text' id='fullName' name='fullName' className='w-full h-10 bg-[#F5F5F5] px-2' required />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <label htmlFor='email' className='text-black'>Email:</label>
          <input type='email' id='email' name='email' className='w-full h-10 bg-[#F5F5F5] px-2' required />
        </div>
      </div>
      <div>
        <label htmlFor='message' className='text-black'>Message:</label>
        <textarea id='message' name='message' className='w-full h-20 bg-[#F5F5F5] px-2' required />
      </div>
      <button type='submit' className='w-full md:w-full lg:w-28 h-10 bg-gray-300 rounded text-center'>
        Submit
      </button>
    </form>
  </div>
  <div className='w-full md:w-1/2 lg:w-1/2 mt-8 md:mt-8 lg:mt-0 flex justify-center'>
    <img src={img5} alt='Contact' className='mx-auto'/>
  </div>  
</section>


      {/*mobile contact view*/}
      <section className=' lg:hidden my-8 px-6 xl:hidden  md:hidden mx-auto'>
        <div className=' mt-8'>
          <p className='text-[#EC5A1C] font-bold font-newRomain text-base leading-5'>
          Contact Us
          </p>
          <p className='mt-4 text-black font-Opensans font-semibold text-sm'>
          Ready to learn more or partner with us? Contact us today to see how we can help you 
          achieve your goals. We’d love to hear from you.
          </p>

          {/* Contact Form */}
          <form className='space-y-3 mt-4'>
          
              <div className=' items-center w-full  mb-4 '>
                <label htmlFor='fullName' className='text-black'>Full Name:</label>
                <input  type='text' id='fullName' name='fullName'  className='w-full h-10 bg-[#F5F5F5] px-2' required />
              </div>
              <div className=' items-center w-full   mb-4'>
                <label htmlFor='email' className='text-black'>Email:</label>
                <input type='email' id='email' name='email' className='w-full h-10 bg-[#F5F5F5] px-2' required />
              </div>
            
            <div>
              <label htmlFor='message' className='text-black'>Message:</label>
              <textarea id='message' name='message' className='w-full h-20 bg-[#F5F5F5] px-2' required />
            </div>
            <button type='submit' className='w-full lg:w-28 h-10 bg-gray-300 rounded text-center'>
              Submit
            </button>
          </form>
        </div>
        <div className='w-full  my-8 '>
          <img src={img5} alt='Contact' className='w-full h-auto'/>
        </div>
        
      </section>
    </main>
   </>
  )
}

export default About
