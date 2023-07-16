import React from 'react'
import './header.css';
import senior from '../../assets/senior.jpg';
const Header = () => {
  return (
    <div>
      <div className='wellness__header section__padding' id='home'>
        <div className='wellness__header-content'>
          <h1 className='header__h1'>
            Wellness is necessary for everyone. Visit us
            today so we can help you reach your best and 
            healthy self.
          </h1>
          <p>As we get older, life becomes stressful. We start having
            all type of problems from joint paint to mental fatigue. We are here 
            to help you overcome this problems. If you are interested in learning more about 
            our services, please provide your email below and one of our team members will
            reach out to you!
          </p>
          <div className='wellness__input'>
            <input type="email" placeholder='Please provide your email' />
            <button type='button'>Request Info</button>
          </div>
          
        </div>
        <div className='header__image'>
            <img src={senior} alt='senior' />
          </div>
      </div>
    </div>
  )
}

export default Header
