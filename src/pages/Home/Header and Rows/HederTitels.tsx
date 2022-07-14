import React from 'react'
import './Row.css'
const HederTitels = () => {
  return (
    <div className="hederRow">
      <span style={{flexGrow: 1}}>Title</span>
      <span style={{flexGrow: 2}}>Artist</span>
      <span style={{flexGrow: 1}}>Price</span>
    </div>
  )
}

export default HederTitels
