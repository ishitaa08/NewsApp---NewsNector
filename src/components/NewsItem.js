import React from 'react'

const NewsItem = (props) => {
   let {title, description, imgUrl,newsUrl, author, date} = props;
    return (
      <div classNmae="my-3">
       <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/1f9a/live/7dc9b1d0-7b38-11ef-b02d-c5f3b724a1ea.jpg": imgUrl} className="card-img-top" alt="..."/>
  <div     className="card-body">
    <h5     className="card-title">{title}<span class="badge text-bg-secondary">New</span></h5>
    <p     className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {date}</small></p>
    <a rel="noreferrer"href={newsUrl} target="_blank"   className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}


export default NewsItem

