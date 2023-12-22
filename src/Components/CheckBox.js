import React from 'react'

const CheckBox = (props) => {
  return (
    <>
    <div className='container my-3'>
      <div className="form-check">
  <input className="form-check-input" type={props.type} value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
     checkbox
  </label>
</div>
    </div>
    </>
  )
}

export default CheckBox
