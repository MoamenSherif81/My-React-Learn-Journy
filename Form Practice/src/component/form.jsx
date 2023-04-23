import { useState } from "react";

function Form(){
  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  });

  function handleChange(e){
    const {name, value, type, checked} = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  return(
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder='First Name' onChange={handleChange} name='firstName' value={formData.firstName}/><br />
      <input type="text" placeholder='Last Name' onChange={handleChange} name='lastName' value={formData.lastName}/><br />
      <input type="email" placeholder='Email' onChange={handleChange} name='email' value={formData.email}/><br />
      <textarea placeholder='comments' onChange={handleChange} name='comments' value={formData.comments}/><br />
      <input type="checkbox" id='isFriendly' onChange={handleChange} name='isFriendly' checked={formData.isFriendly}/>
      <label htmlFor='isFriendly'>Are you friendly!</label><br />
      
      <fieldset>
        <legend>Current employment statues</legend>

        <input 
          type="radio" id='unemployed' 
          name='employment' 
          value='unemployed' 
          onChange={handleChange}
          checked = {formData.employment === 'unemployed'}
        />
        <label htmlFor='unemployed'>Unemployed</label><br />
        
        <input 
          type="radio" id='part-time' 
          name='employment' 
          value='part-time' 
          onChange={handleChange} 
          checked = {formData.employment === 'part-time'}
        />
        <label htmlFor='part-time'>Part Time</label><br />
        
        <input 
          type="radio" id='full-time' 
          name='employment' 
          value='full-time' 
          onChange={handleChange}
          checked = {formData.employment === 'full-time'}
        />
        <label htmlFor='full-time'>Full Time</label><br />
      </fieldset>

      <select id='favColor' value={formData.favColor} onChange={handleChange} name='favColor'>
        <option value=''>Choose Your Favourite Color</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='blue'>Blue</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
      </select> <br />
      <button>Submit</button>

    </form>
  );
}

export default Form;