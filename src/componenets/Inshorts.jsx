import { useContext, useState } from "react";
import { fecthedData } from "../context.jsx/Data";
import { likesData } from "../context.jsx/Likes";
import { changeTheme } from "../context.jsx/Theme";

function Inshorts() {
  const { data} = useContext(fecthedData);
  const {ligDar}=useContext(changeTheme)
  const { likeData, setLikeData } = useContext(likesData);
  const [valueadd, setValueadd] = useState("");
  const [comment, setComment] = useState([]);
  // const [reBook,setReBook]= useState(true);
  // const [idd,setIdd]=useState("like")

console.log(data,"data")
  const likess=(e)=>{
     console.log(e.target.id,e.target.innerText)
     data.map((_,idx)=>{
      if(Number(e.target.id)===idx){
        e.target.innerText="👍"
      }
     })
  }

  return (
    <div className={ligDar?"white":"dark"}>
      {data.map((item,idx) => {
        return (
          
          <div className="inshort-Cards" key={item.publishedAt}>
            <h1>{item.title}</h1>
            <img src={item.urlToImage} alt="Unavailable" width={"100px"} />
            <p>{item.description}</p>

            <a href={item.url} target="blank">
              <span>Read More</span>
            </a>
            {<button
            
            onClick={() => {
              likeData.push(item);
              setLikeData([...likeData]);
              
            }}
          >
            BookMark
          </button>}
            
            {comment.map((ele) => {
              if (ele[1] === item.publishedAt) {
                return <p>{ele[0]}</p>;
              }
            })}
            <div className="likes-comment">
              <div className="likes">
                <button id={idx} onClick={(e)=>likess(e)}>Like</button>
                
              </div>
              <div className="comment">
                <input
                  type="text"
                  id={item.publishedAt}
                  onChange={(e) =>{
                    console.log(e.target.id,item.publishedAt)
                    setValueadd(e.target.value)
                  }}
                value={valueadd}
                  
                />
                <button
                  onClick={() => {
                    comment.push([valueadd, item.publishedAt]);
                    setValueadd("");
                    setComment([...comment]);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Inshorts;
