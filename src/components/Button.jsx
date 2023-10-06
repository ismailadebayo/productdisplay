import React from 'react'
import '../assets/styles/button.css'
const Button = (props) => {

  let {text, btnStyle} = props
  btnStyle={
    padding: "5px 15px",
    borderRadius: "5px",
    display: 'inline'
  }
  return (
    <div className='btn-div' >
        <button style={btnStyle}>{text}</button>
    </div>
  )
}

export default Button
