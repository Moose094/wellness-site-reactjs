import React from 'react'
import {im1, im2} from './imports';
import {Article} from '../../components';
import './blog.css';
const Blog = () => {
  return (
    <div className='wellness__blog section__padding' id='blog'>
      <div className='blog__head'>
        <h1 id='bh1'>Trends about wellness</h1>
      </div>

      <div className='blog__container'>
        <div className='first'>
          <Article imgUrl={im1} date='jan 9, 2022' title="It is wellness awareness month"/>
        </div>
        <div className='second'>
          <Article imgUrl={im2} date='jan 9, 2022' title="It is wellness awareness month"/>
          

          
        </div>
      </div>
      

      
    </div>
  )
}

export default Blog
