import React from 'react';

const About = () => {
  return (
    <div className='about'>
      
        <div className="about_img">
            <img src='./images/about.png' alt='about_img'></img>
        </div>

        <div className="about_para">
            <h1 className='about_h1'>LEARN MORE ABOUT US</h1>

            <p id='long_para'>"At our gym, we're committed to helping you achieve your fitness goals with top-notch facilities, expert trainers, personalized support, and a wide array of equipment including cardio machines, free weights, and specialized training areas.Join us and experience the difference at our welcoming and motivating environment."</p>

            <button id='about_btn'>READ MORE</button>
        
        </div>

    </div>
  );
};

export default About;
