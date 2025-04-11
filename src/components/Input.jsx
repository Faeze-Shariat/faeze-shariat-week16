import React, { useState } from 'react'
import cities from '../cities.json'

import styles from './Input.module.css'


const Input = ({handleChange, hint}) => {
  const [input,setInput] = useState("");
  const [suggestionsList , setSuggestionsList] = useState(true);

  function handleChange(event){
    const value = event.target.value;
    setInput(value);
    setSuggestionsList(true)
  }

  function clickHandler(city){
    setInput(city)
    setSuggestionsList(false)
  }

  const filtercities = input ? cities.filter(city => city.includes(input)) : []

  return (
    <div className='input'>
    
      <label htmlFor="input" >
        {hint}
      </label>

    <div className={styles.inputWrapper} style={{ "--input-length": input.length }}>
      <input
      type="text"
      id="input"
      onChange={handleChange}
      value={input}
      />

      {filtercities.length > 0 && (
        <div className={styles.suggestionWrapper}>
          <span className={styles.inputPlaceholder}>{input}</span>
          <span className={styles.suggestion}>{filtercities[0].slice(input.length)}</span>
        </div>
      )}
    </div>

    {filtercities.length > 0 &&  suggestionsList && (
      <ul className={styles.suggestionsList}>
        {filtercities.map((city, index) => (
          <li key={index} onClick={() => clickHandler(city)}>{city}</li>
          ))}
      </ul>
    )}
     
  </div>
  );
};

export default Input;