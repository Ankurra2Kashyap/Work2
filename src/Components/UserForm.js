import React, { useState } from 'react';
import InputField from './InputField';
import CheckBox from './CheckBox';
import Gender from './Gender';

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const submit =(e)=>{
   e.preventDefault();
   setEmail("");
   setPassword("");
  }

  const handleChange = (e) => {
    const { name} = e.target;


    if (name === 'Email Address') {
      setEmail(e.target.value);
    } else if (name === 'Password') {
      setPassword(e.target.value);
    }
  }

  return (
    <div>
      <InputField
        type="email"
        htmlFor="exampleInputEmail1"
        name="Email Address"
        place="Enter Email"
        value={email}
        onChange={handleChange}
      />

      <InputField
        type="password"
        htmlFor="exampleInputPassword1"
        name="Password"
        place="Enter Password"
        value={password}
        onChange={handleChange}
      />
      <CheckBox
        type="checkbox"
      />
      <Gender
        name="Gender Select"
        first="Male"
        second="female"
        third="Transgender"
      />


      <div className='container'>
        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default UserForm;
