import "./WorkCardStyles.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"



const Work = () => {
  return (
    <div className="work-container">
    <h1 className="product-heading">Products</h1>
    <div className="product-container">
    {WorkCardData.map((val,ind)=> {
        return(
            <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
            />
        )
    })}
       
    </div>
     </div>
  )
}

export default Work;