/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import img1 from "../assets/images/Rectangle 30 (1).png";
import img2 from "../assets/images/Rectangle 34 (8).png";
import img3 from "../assets/images/Rectangle 34 (11).png";
import img4 from "../assets/images/Rectangle 34 (9).png";
import img5 from "../assets/images/Rectangle 34 (10).png";
import img6 from "../assets/images/Cards (1).png";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Career = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
     {/* SEO Meta Tags */}
     <Helmet>
        <title>Career Opportunities at Mesh</title>
        <meta name="description" content="Join Mesh and be part of a team that values work-life balance, diversity, and opportunities for growth. Explore our career opportunities today!" />
        <meta name="keywords" content="careers, job opportunities, work-life balance, growth, diversity, inclusive workplace" />
        <link rel="canonical" href="/careers" />
      </Helmet>

      {/* Section 1: Mission @ Mesh */}
      <section className="bg-[#D1D1D1] w-full py-20 md:py-24 ">
      <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-3xl">
    <div className="flex flex-col px-6 md:px-0">
      <h1 className="font-newRomain font-bold text-2xl md:text-4xl leading-tight text-black text-center md:text-left">
        Mission @ Mesh
      </h1>
      <p className="font-Opensans font-semibold text-sm md:text-lg leading-relaxed text-black mt-6 text-center md:text-left">
        Our culture is the heartbeat of our organization, reflecting our values in every interaction. It drives us to use technology for innovative solutions that enrich our community's lives, while fostering a supportive workplace and enhancing performance. United by a mission to help people save money and access services for happier, healthier lives, let’s continue inspiring each other toward our common goal!
      </p>
    </div>
    <div className="flex justify-center">
      <img src={img1} alt="Mission Image" className="w-full max-w-md" />
    </div>
  </div>
</div>

      </section>

      {/* Section 2: Our Culture */}
      <section className="flex justify-center md:justify-center  mt-12 ">
  <div className="flex flex-col w-full md:justify-center  max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-4xl px-6 lg:px-0 xl:px-0">
    <p className="text-[#6DA8FF] font-newRomain font-bold text-lg mb-4">Our Culture</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      {/* Work-Life Balance */}
      <div className=''>
        <img src={img2} alt="Work-Life Balance"  className='w-full max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-3xl mx-auto'/>
        <h3 className="text-black font-bold font-newRomain text-lg mt-6">Work-Life Balance</h3>
        <p className="text-black font-Opensans font-semibold text-sm mt-4 w-[412px] md:w-[320px] lg:w-[466px] xl:w-[466px]">
          To prioritize work-life balance, we offer flexible work arrangements, respect personal time, and provide generous time off. This supportive culture promotes employee well-being and reduces burnout, ultimately creating a more attractive and productive workplace.
        </p>
      </div>

      {/* Growth and Development */}
      <div>
        <img src={img4} alt="Opportunities for Growth" className='w-full max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-3xl mx-auto'/>
        <h3 className="text-black font-bold font-newRomain text-lg mt-6">Opportunities for Growth and Development</h3>
        <p className="text-black font-Opensans font-semibold text-sm mt-4 w-[412px] md:w-[320px] lg:w-[466px] xl:w-[466px]">
          We invest in our employees' growth by providing training, workshops, mentorship programs, and promotion opportunities. We encourage continuous learning through conferences, certifications, and skill-building initiatives to attract ambitious talent.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
      {/* Diversity, Equity, and Inclusion */}
      <div>
        <img src={img5} alt="Diversity, Equity, and Inclusion" className='w-full max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-3xl mx-auto'/>
        <h3 className="text-black font-bold font-newRomain text-lg mt-6">Diversity, Equity, and Inclusion (DEI)</h3>
        <p className="text-black font-Opensans font-semibold text-sm mt-4 w-[412px] md:w-[320px] lg:w-[466px] xl:w-[466px]">
          We foster an inclusive work environment that values diversity in thought, background, gender, race, and more, creating a sense of belonging and ensuring equal opportunities for all.
        </p>
      </div>

      {/* Collaborative Work Environment */}
      <div>
        <img src={img3} alt="Collaborative Environment" className='w-full max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-3xl mx-auto'/>
        <h3 className="text-black font-bold font-newRomain text-lg mt-6">Collaborative and Supportive Work Environment</h3>
        <p className="text-black font-Opensans font-semibold text-sm mt-4 w-[412px] md:w-[320px] lg:w-[466px] xl:w-[466px]">
          We encourage the free exchange of ideas across departments, foster open communication between employees and leadership, and promote a supportive team culture.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Section 3: The Process */}
      <section className="px-6 md:px-0 lg:px-0 xl:px-0  mt-12 justify-center">
       <div className=' w-full max-w-5xl md:max-w-3xl lg:max-w-5xl xl:max-w-5xl   mx-auto'>
       <p className="text-[#6DA8FF] font-newRomain font-bold text-lg mb-4 ">The Process</p>
        <p className="text-black font-Opensans font-bold text-sm mb-6">
          Our interview process may differ from role to role. Here are some of the steps to apply:
        </p>
       </div>
        <img src={img6} alt="Process Image" className="w-full max-w-5xl lg:max-w-5xl xl:max-w-5xl md:max-w-3xl mx-auto" />
        <div className="flex justify-center md:relative md:left-72 mt-8">
          <NavLink to="/careers">
            <button className="text-black bg-[#D9D9D9] md:relative my-5  px-6 py-2 rounded">View Open Roles</button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Career;
