import React, { Component } from 'react'
import Articles from './Articles'

class News extends Component {
  render(){
    return(
      <div className='articles-container'>
        {this.props.news.map((article, index) => {
          return(
            <Articles
              key={index}
              article={article}
              arrayIndex={index}
            />
          )
        })}
      </div>
    )
  }
}

export default News;
