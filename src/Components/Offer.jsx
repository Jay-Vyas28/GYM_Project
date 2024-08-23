import React from 'react'

const Offer = () => {
  return (
    <div className='offer_bg'>
      
      <img src='./images/offer.png' alt='bg_img'></img>

      <div className="offer_para">
          <h1 id='offer_1'>A BIG <span id='offer_red'> OFFER </span> FOR</h1>
          <h1 id='offer_2'>THIS SUMMER</h1>

          <p id='offer_para'>"Discover our latest gym offer and achieve your fitness goals with us today!"</p>

          <button id='offer_btn'>JOIN NOW</button>
      </div>
    </div>
  );
};

export default Offer;
