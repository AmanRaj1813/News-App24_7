import React from "react";
import null_logo from "./null_logo.png";
const NewsItem =(props)=>{

  let { title, description, imageurl, newsurl, author, date,source } = props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
              {source}
             
            </span>
          <img style={{height:'170px'}}
            src={
              imageurl?imageurl:null_logo
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
           
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn btn-primary"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
