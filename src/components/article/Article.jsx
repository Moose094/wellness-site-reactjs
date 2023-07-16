import React from 'react'
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='wellness__article'>
        <div className='article__image'>
            <img src={imgUrl} alt='a1' />

        </div>
        <div className='article-content'>
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Article
