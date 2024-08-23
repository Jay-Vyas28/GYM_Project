import React from 'react';

const Home = (props) => {
  return (
    <div className='home'>

        <div className="main_para">
            <h2 id='h2_para'>STEP UP YOUR </h2>
            <h1 id='h1_para'><span id='red_para'>FITNESS </span> WITH US</h1>
            <p id='last_para'> Build Your Body And Fitness With Professional Touch</p>

            <button id='para_btn'>{props.title}</button>

        </div>
    </div>
  );
};

export default Home;
