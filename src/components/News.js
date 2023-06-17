/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from "react";

import NewsItem from "./NewsItem";


import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const  News =(props)=>{
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)}-NewsApp(24*7)`;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  



  // articles = [
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC Sport",
  //     title: "Nadal out of French Open & plans to retire in 2024",
  //     description:
  //       "Rafael Nadal will miss the French Open for the first time in 19 years after a hip injury rules out the 14-time men's champion.",
  //     url: "http://www.bbc.co.uk/sport/tennis/65597964",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/D505/production/_129733545_nadal_rg.jpg",
  //     publishedAt: "2023-05-18T14:52:22.7448317Z",
  //     content:
  //       "Nadal's injured his hip in an Australian Open second-round defeat by American Mackenzie McDonald on 18 January\r\nRafael Nadal will miss the French Open for the first time in 19 years after a hip injur… [+2920 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Elderly couple rescued from roof during Italy floods",
  //     description:
  //       "The Italian coast guard helicopter winched the pair to safety following catastrophic flooding in the Emilia-Romagna region.",
  //     url: "http://www.bbc.co.uk/news/world-europe-65630308",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/176CA/production/_129764959_de11.jpg",
  //     publishedAt: "2023-05-18T14:22:20.9558236Z",
  //     content:
  //       "The Italian coast guard has rescued two elderly people by helicopter from their roof after heavy rains caused flooding and landslides in the Emilia-Romagna region. Nine people have been killed and se… [+70 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Queen Elizabeth II: Funeral cost government £162m",
  //     description:
  //       "The state funeral, in September last year, followed a period of national morning.",
  //     url: "http://www.bbc.co.uk/news/uk-65636772",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/24B5/production/_126779390_7f895f879568bfa7667db9ab291467fc5f8433b1.jpg",
  //     publishedAt: "2023-05-18T13:52:19.0657353Z",
  //     content:
  //       "Queen Elizabeth II's funeral and related events cost the government an estimated £162m, the Treasury has said. \r\nThe state funeral, held on 19 September 2022, followed a period of national mourning.\r… [+612 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title:
  //       "Harry and Meghan: What we know so far about the New York paparazzi incident",
  //     description:
  //       "The couple's spokesperson says paparazzi pursued them for two hours - although conflicting accounts have emerged.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-65624824",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/3381/production/_129758131_gettyimages-1490861735.jpg",
  //     publishedAt: "2023-05-18T13:22:21.1581082Z",
  //     content:
  //       "Media caption, Warning: Contains flashing images throughout (Video not available outside the UK)\r\nConflicting accounts of an incident which Prince Harry and his wife Meghan's spokesperson described a… [+5271 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Italy floods leave nine dead and force 13,000 from their homes",
  //     description:
  //       "Almost every river flooded between the coast and the city of Bologna, leaving nine people dead.",
  //     url: "http://www.bbc.co.uk/news/world-europe-65632655",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/B712/production/_129766864_floods3.jpg",
  //     publishedAt: "2023-05-18T12:22:20.0640208Z",
  //     content:
  //       "Media caption, Watch: Elderly couple rescued from rooftop amid deadly Italy floods\r\nMore than 20 rivers have burst their banks in Italy, leaving nine people dead and forcing 13,000 from their homes a… [+5048 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title:
  //       "Colombia plane crash: Children reportedly survived 16 days in jungle",
  //     description:
  //       "The children disappeared after their plane crashed on 1 May, killing the others on board.",
  //     url: "http://www.bbc.co.uk/news/world-latin-america-65630020",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/C75C/production/_129763015_949f93fbe2b04638caafbfa709dc74c63fa54be0.jpg",
  //     publishedAt: "2023-05-18T10:52:20.7363087Z",
  //     content:
  //       "Officials in Colombia say four children missing since their plane crashed in the jungle have been found alive and well more than two weeks later.\r\nTheir mother and the other adults were killed in the… [+3729 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Oldest most complete Hebrew Bible sells for $38m at auction",
  //     description:
  //       "The 1,100-year-old Codex Sassoon sells at auction for $38m - a record for handwritten text.",
  //     url: "http://www.bbc.co.uk/news/world-middle-east-65632624",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/7824/production/_129765703_mediaitem129765254.jpg",
  //     publishedAt: "2023-05-18T10:52:20.0177369Z",
  //     content:
  //       "The oldest most complete Hebrew Bible has been bought at Sotheby's New York for $38.1m (£30.6m), becoming the most valuable manuscript sold at auction.\r\nThe Codex Sassoon is thought to have been writ… [+2777 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "New York truck attacker gets 10 life sentences plus 260 years",
  //     description:
  //       "Islamist extremist Sayfullo Saipov killed eight when he drove a truck at pedestrians in New York in 2017.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-65632186",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/17792/production/_98564169_6dab553f-246a-4f65-b66e-ac5d45926f2d.png",
  //     publishedAt: "2023-05-18T10:22:20.4237038Z",
  //     content:
  //       "Media caption, New York truck attack: Who is Sayfullo Saipov?\r\nAn Islamic State supporter behind the deadliest terror attack in New York since 9/11 has been told he will die in prison serving multipl… [+2214 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title:
  //       "Suspected Pentagon leaker was warned multiple times, prosecutors say",
  //     description:
  //       "A 21-year-old accused of leaking classified files ignored warnings from his superiors, prosecutors say.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-65625524",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/073F/production/_129755810_1057461595888c13e777d8a90796d8a28d4a11d1.jpg",
  //     publishedAt: "2023-05-18T09:22:20.0969385Z",
  //     content:
  //       "A US airman suspected of leaking classified files was warned repeatedly about his handling of classified information, prosecutors say.\r\nIn a court filing, US prosecutors argued Jack Teixeira should r… [+2645 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title:
  //       "Meghan and Prince Harry looked nervous, says New York taxi driver",
  //     description:
  //       '"I think they were being chased the whole day or something," says New Yorker Sonny Singh.',
  //     url: "http://www.bbc.co.uk/news/world-us-canada-65629160",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/35F8/production/_129761831_b90cefdd-9991-4867-8638-276941347675.jpg",
  //     publishedAt: "2023-05-17T22:37:16.3219454Z",
  //     content:
  //       "Media caption, Watch: BBC talks to taxi driver that drove Harry and Meghan\r\nA New York City cab driver who drove the Duke and Duchess of Sussex for about 10 minutes on Tuesday night as they tried to … [+3445 chars]",
  //   },
  // ];
 

  const UpdateNews = async ()=> {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);

  }
  useEffect(() => {
    
    UpdateNews();

  },[] )

  // async componentDidMount() {
  //  UpdateNews();
  // }
  // handlePrevClick = async () => {
  //   console.log("previous");
  //  setpage(page-1)
  //   UpdateNews();
  // };

  // handleNextClick = async () => {
  //   console.log("next");
  //   setpage(page+1)
  //   UpdateNews();
  // };

 const  fetchMoreData =async () => {
    setpage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData =await data.json();
      setarticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
  };

  
    return (
      <>
      
        <h2 className="text-center" style={{ margin: "revert" }}>
          Our Top Headlines on {capitalizeFirstLetter(props.category)}
        </h2>
        {loading && <Spinner/>}
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row my-2">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 87)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              )
            })}
          </div>
          </div>
        </InfiniteScroll>
        </>
     
    )
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
