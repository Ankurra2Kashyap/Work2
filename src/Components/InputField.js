import React from 'react';

const InputField = (props) => {
 
  return (
    <div className='container my-3'>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor={props.htmlFor}>{props.name}</label>
          <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            className="form-control"
            placeholder={props.place}
          />
        </div>
      </form>
    </div>
  );
}

export default InputField;
