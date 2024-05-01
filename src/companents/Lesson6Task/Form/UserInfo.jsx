import React, { useState } from "react";
import './UserInfo.css'
export const UserInfo = () => {
  const [array,setArray] = useState([{
    name:'',
    
  }]);
  const [form,setForm] = useState('');
  const handleChange = (e)=>{
      setForm(e.target.value);
  }
  const handleClick = ()=>{
    setArray(prev=>[...prev,form]);
  }
  console.log(array)
  return (
    <form action="form">
      <label htmlFor="name">
        FullName
        <input value={array.value} type="text" name="name" id="name" onChange={handleChange} />
      </label>
      <label htmlFor="passport">
        Pasport number
        <input value={array.value} type="text" name="passport" id="passport" onChange={handleChange} />
      </label>
     <label htmlFor="0">
      Gender:
     <select>
        <option onChange={handleChange} value="gender">Male</option>
        <option onChange={handleChange} value="gender">Female</option>
      </select>
     </label>
      <label htmlFor="age">
        Age
        <input type="text" name="age" id="age" />
      </label>
      <label htmlFor="email">
        E-mail:
        <input type="text" name="email" id="email" />
      </label>
      <label htmlFor="number">
        Phone number
        <input type="number" name="number" id="number" />
      </label>
      <label htmlFor="description">
      Description of symptoms
      <textarea name="readmission" id="readmission" cols="30" rows="10"></textarea>
      </label>
      <label className="checkboxlabel" htmlFor="readmission">
      Re-admission
      <input className="checkbox" type="checkbox" />
      </label>
      <button onClick={handleClick} className="buttonSend" type="button">Send</button>
    </form>
  );
};
