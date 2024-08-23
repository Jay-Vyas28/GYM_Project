import React from 'react';

const Features = () => {
  return (
    <div className='features'>
        <p id='f_header'>FEATURES</p>

        <div className="cards">

            <div className="card" id='card_1'>

                <img src='./images/1.svg'></img>
                <h3 id='c_h3'>Weight Lifting</h3>
                <para id="c_para">"Weight lifting enhances strength and muscle development."</para>

            </div>

            <div className="card" id='card_2'>

            <img src='./images/2.svg'></img>
            <h3 id='c_h3'>Specific Muscle</h3>
                <para id="c_para">"Developing specific muscles enhances overall physique and appearance."</para>

            </div>

            <div className="card"  id='card_3'>

            <img src='./images/3.svg'></img>
            <h3 id='c_h3'>Flex Your Muscle</h3>
                <para id="c_para">"Flexing your muscles showcases their strength and definition."</para>
    
            </div>

            <div className="card" id='card_4'>

            <img src='./images/4.svg'></img>
            <h3 id='c_h3'>Cardio Excercise</h3>
            <para id="c_para">"Cardio exercises improve cardiovascular health and endurance."</para>
  
            </div>


        </div>

    </div>
  );
};

export default Features;
