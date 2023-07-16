import React from 'react'
import './brand.css';
import { meditation, yoga, diet, bench } from './imports';

const Brand = () => {
  return (
    <div className='wellness__brand section__padding'>
      <div>
        <img src={meditation} className='brandImg' alt='meditation' />
        <img src={yoga} className='brandImg' alt='yoga' />
        <img src={diet} className='brandImg' alt='diet' />
        <img src={bench} className='brandImg' alt='bench' />



      </div>
    </div>
  )
}

export default Brand
