import { Form } from "./form.component"

export const ContactUs = () => {

  return (
    <div className="contact-container">
      <div className="title-container">
        <h2 className="title"> Contacta con nosotros </h2>
        <div className="subtitle"> ¿Tienes alguna duda? Te ayudamos </div>
      </div>
      <Form />
    </div>
  )
}
