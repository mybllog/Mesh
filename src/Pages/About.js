import React from 'react'
import img1 from "../assets/images/Rectangle 30.png"
import img2 from "../assets/images/Rectangle 34.png"
import img3 from "../assets/images/wire.png"
import img4 from "../assets/images/Rectangle 33.png"
import img5 from "../assets/images/Rectangle 33 (1).png"

const About = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      {/* Mission Section */}
      <div className='bg-[#2F4F75] w-full h-auto py-20'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 items-center mx-auto px-6 lg:px-20'>
          <div className='text-white'>
            <h1 className='font-newRomain font-bold text-2xl lg:text-4xl leading-10'>
              Our Mission @ Mesh
            </h1>
            <p className='font-Opensans font-semibold text-base lg:text-lg mt-6 leading-7'>
              Our mission is to connect people with the services and products they need, 
              regardless of their location. We strive to introduce innovative methods that 
              enhance both the delivery and perception of these services, while leveraging 
              technology to simplify and improve everyday life.
            </p>
          </div>
          <div className='mt-6 lg:mt-0'>
            <img src={img1} alt='Mission' className='w-full max-w-md'/>
          </div>
        </div>
      </div>

      {/* Values and What We Do Section */}
      <div className='flex flex-col justify-center items-center my-11 space-y-12 px-6 lg:px-20'>
        <p className='text-center font-newRomain font-normal text-2xl lg:text-4xl'>
          We <span className='text-[#EC5A1C]'>strive</span> daily to be the <span className='text-[#6DA8FF]'>pioneers</span> in <br className='hidden lg:block'/>
          <span className='text-[#EC5A1C]'>technology</span>
        </p>

        <div className='lg:flex lg:space-x-12 my-14'>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
            <img src={img2} alt='Values' className='w-full h-auto'/>
          </div>
          <div className='lg:w-1/2 lg:mt-16'>
            <p className='text-[#EC1C1C] font-bold font-newRomain text-base leading-4'>
              Our Values
            </p>
            <ul className='my-4 text-black font-Opensans font-semibold text-sm list-disc space-y-2'>
              <li>Innovation: We push boundaries to find new, creative ways to solve problems.</li>
              <li>Customer First: Our users are at the heart of everything we do.</li>
              <li>Integrity: Transparency and honesty guide our every action.</li>
              <li>Excellence: We hold ourselves to the highest standards of quality and performance.</li>
            </ul>
          </div>
        </div>

        <div className='lg:flex lg:space-x-12 my-8 '>
          <div className='lg:w-1/2 lg:mt-16'>
            <p className='text-[#6DA8FF] font-bold font-newRomain text-base leading-5'>
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
          <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
            <img src={img3} alt='What We Do' className='w-full h-auto'/>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='lg:flex lg:space-x-12 my-8 px-6 lg:px-20'>
        <div className='w-full lg:w-1/2'>
          <img src={img4} alt='Our Team' className='w-full h-auto'/>
        </div>
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
      </div>

      {/* Contact Us Section */}
      <div className='lg:flex lg:space-x-12 my-8 px-6 lg:px-20'>
        <div className='lg:w-1/2'>
          <p className='text-[#461CEC] font-bold font-newRomain text-base leading-5'>
            Contact Us
          </p>
          <p className='mt-4 text-black font-Opensans font-semibold text-sm'>
            Ready to learn more or partner with us? Contact us today to see how we can help you 
            achieve your goals. We’d love to hear from you.
          </p>

          {/* Contact Form */}
          <form className='space-y-4 mt-4'>
            <div className='flex flex-col lg:flex-row lg:space-x-4'>
              <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
                <label htmlFor='fullName' className='text-black'>Full Name:</label>
                <input type='text' id='fullName' name='fullName' className='w-full h-10 bg-[#F5F5F5] px-2' required />
              </div>
              <div className='w-full lg:w-1/2'>
                <label htmlFor='email' className='text-black'>Email:</label>
                <input type='email' id='email' name='email' className='w-full h-10 bg-[#F5F5F5] px-2' required />
              </div>
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
        <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
          <img src={img5} alt='Contact' className='w-full h-auto'/>
        </div>
      </div>
    </div>
  )
}

export default About
