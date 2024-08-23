import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
       <div className="footer">
         <div className="f1">
            <ul className='f_li'>
            <li className='f_fi'>QUICK LINKS</li>
            <li>Gym Locator</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Testimonials</li>
            <li>Our Events</li>
            <li>Group Program</li>
            </ul>
          </div>

        </div>

       <div className="footer f2">
          <div className="middle_footer">
            <p className='middle_fpara'>
            Sign Up To Join Us
            </p>
            <input className='footer_ip' type='email' name='mail' placeholder='Enter Email'></input>
            <button className='sub_btn'>SUBSCRIBE NOW</button>
          </div>
       </div>

       <div className="footer f3">
       <div className="f1">
            <ul className='f_li'>
            <li className='f_fi'>BlOG</li>
            <li>Benefits of GYM</li>
            <hr />
            <li>Wrok Well,Live Well</li>
            <hr />
            <li>Run Eat Repeat</li>
            </ul>
          </div>

       </div>

    </div>
  );
};

export default Contact;
