import React,{useContext} from 'react'
import {likesData} from "../context.jsx/Likes"
import{changeTheme} from "../context.jsx/Theme"

function Favourite() {
  const {likeData,setLikeData} = useContext(likesData)
  const {ligDar}=useContext(changeTheme)
  return (
   <div>{likeData.map((item,idx) => {
    return (
      <div className={ligDar?"white":"dark"}>
        <h1>{item.title}</h1>
        <img src={item.urlToImage} alt="Unavailable" width={"100px"} />
        <p>{item.description}</p>
       
       <a href={item.url} target="blank"><span>Read More</span></a>  
       <button onClick={()=>{likeData.splice(idx,1);setLikeData([...likeData])}}>Remove From Bookmark</button>
      </div>
    );
  })}</div>
  )
}

export default Favourite