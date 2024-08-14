import { useState } from 'react'

export const Form = () => {

  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ( event ) => {
    setForm({
      ...form,
      [ event.target.name ]: event.target.value,
    })
  }

  const handleSubmit = ( event ) => {
    event.preventDefault()
    console.log( form )
  }

  return (
    <form
      className="form"
      onSubmit={ handleSubmit }
    >
      <div className="form-group">
        <label
          htmlFor="name"
        >Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={ handleChange }
          value={ form.name }
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="email"
        >Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={ handleChange }
          value={ form.email }
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="message"
        >Mensaje</label>
        <textarea
          id="message"
          name="message"
          onChange={ handleChange }
          value={ form.message }
        />
      </div>
      <div className="form-group">
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}
