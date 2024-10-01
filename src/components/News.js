import React, { useEffect, useLayoutEffect, useState } from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'; 
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>  {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)
 // document.title = `${capitalizeFirstLetter( props.category)} - NewsNector`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
useEffect(()  => {
  updateNews();
},  [])
 
 

  const fetchMoreData = async () => {
  setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=0280faf0961546ecbd7255a3a47fe9d1&page=${page}&pageSize=${ props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    
  };

  const updateNews = async() => {
     props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=0280faf0961546ecbd7255a3a47fe9d1&page=${page}&pageSize=${ props.pageSize}`;
    let data = await fetch(url);
     props.setProgress(30);
    let parsedData = await data.json();
     props.setProgress(50);
     setArticles(parsedData.articles);
     setTotalResults(parsedData.totalResults);
     setLoading(false);    
    
     props.setProgress(100);
  }

  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };

  
    return (
      <div className="container my-4">
      <h1 className="text-center my-5" style={{ marginTop: '4rem', marginBottom: '35px' }}>
  NewsNector - Top Headlines on {capitalizeFirstLetter(props.category)}
</h1>
        
        {/* Spinner for loading */}
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {articles && articles.length > 0 ? (
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={element.description ? element.description : ''}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })
            ) : (
              <div>No news articles available</div>
            )}
          </div>
          </div>
        </InfiniteScroll>

       
      </div>
    );
  
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
