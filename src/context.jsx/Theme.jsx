import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const changeTheme = createContext()

function Theme(props) {
    const[ligDar,setLigDar]=useState(true)
  return (
    <changeTheme.Provider value={{ligDar,setLigDar}}>
        {props.children}
    </changeTheme.Provider>
  )
}

export default Theme
export {changeTheme}