import React from 'react'
import './styles.css'

const errorStyle = {
  color: 'red', // Text color
  fontWeight: 'italic', // Font weight
  marginTop: '5px', // Margin above the text
};


const Input = ({title, label,register, required, errors, ...rest}) => {
  return (
  
    <>
        <label htmlFor={label}>{title}</label>
        <input {...register(label, { required })}  {...rest}/>
        <p style={errorStyle}>{errors?.message}</p>
    </>
  )
}

export default Input