import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div className='Form'>
      <div className='form-embed'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe_L3HnW0VxjinrEdZRbW7ZYcofb1xx0fbQNJCjLY30Slw_6A/viewform?embedded=true"
          title="Formulario de voluntariado"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Carregando...
        </iframe>
      </div>
    </div>
  )
}

export default Form
