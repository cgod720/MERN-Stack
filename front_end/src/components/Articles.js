import React, { Component } from 'react'

class Articles extends Component {
  render(){
    return(
      <div className='news-container'>
        <div className='article-container'>
          <a href={this.props.article.url}>{this.props.article.title}</a>
          <a href={this.props.article.url}>
            <img src={this.props.article.urlToImage} alt={this.props.article.title}/>
          </a>
        </div>
      </div>
    )
  }
}

export default Articles;
