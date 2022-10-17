import React, { useContext } from "react";
import {fecthedData} from "../context.jsx/Data"
import {likesData} from "../context.jsx/Likes"
import{changeTheme} from "../context.jsx/Theme"

function Headlines() {
  const {ligDar}=useContext(changeTheme)
  const {data} = useContext(fecthedData)
  const {likeData,setLikeData} = useContext(likesData)
  return (
    <div className={ligDar?"white":"dark"}>
      {data.map((item, idx) => {
        if (idx % 2 === 0) {
          return (
            <div className="title-Cards">
            <a href={item.url} target="blank"><h1>{item.title}</h1></a>  
              <img src={item.urlToImage} alt="Unavailable" width={"100px"} />
              <button onClick={()=>{likeData.push(item);setLikeData([...likeData])}}>BookMark</button>
            </div>
          );
        } else {
          return (
            <div className="title-Cards">
               <button onClick={()=>{likeData.push(item);setLikeData([...likeData])}}>BookMark</button>
              <img src={item.urlToImage} alt="Unavailable" width={"100px"} />
              <a href={item.url} target="blank"><h1>{item.title}</h1></a>  
            </div>
          );
        }
      })}
    </div>
   
  );
}

export default Headlines;
