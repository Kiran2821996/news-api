import React,{useContext} from 'react'
import{changeTheme} from "../context.jsx/Theme"

function About() {
  const {ligDar}=useContext(changeTheme)
  return (
    <div className={ligDar?"white":"dark"}>About</div>
  )
}

export default About