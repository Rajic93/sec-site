const contactTemplate = document.createElement('template');
contactTemplate.innerHTML = `
  <style>
      span {
        font-family: Montserrat;
        color: #003170 !important;
      }
      h1 {
        font-family: Montserrat;
      }
    .contact {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #FFFFFF;
      width: 100%;
      padding: 100px 50px;
      border-bottom: 5px solid #FFDE59;
    }

    .contact_heading {
      color: #2F74CF;
      margin-bottom: 50px;
      margin-top: 0;
      font-size: 36px;
    }

    .contact_text {
      color: #2F74CF;
      margin-bottom: 50px;
      font-size: 24px;
    }

    .contact_form_container {
      width: 30%;
      padding: 20px;
      background: #E4E3E6;
      display: flex;
      flex-direction: column;
      border: 1px solid #FFDE59;
    }

    .contact_form_field_container {
      display: flex;
      flex-direction: column;
    }

    .contact_form_field_container input {
      border: 1px solid #FFDE59;
    }
    .contact_form_field_container textarea {
      border: 1px solid #FFDE59;
    }

    .contact_form_field_container--contact {
      margin-top: 20px;
      flex-direction: row-reverse;
    }

    .contact_form_field_container--contact input {
      width: auto;
      font-size: 20px;
      border: none;
      background: #FFDE59;
      padding: 5px 25px 5px 25px;
      border-radius: 50px;
    }
  </style>
  <div class='contact'>
    <h1 class='contact_heading'>Got an awesome business idea?</h1>
    <span class='contact_text'>Feel free to reach us out for brainstorming.</span>
    <br />
    <div class='contact_form_container'>
      <div class='contact_form_field_container'>
        <span>Name</span>
        <br />
        <input type='text' name='name' id='name' />
      </div>
      <br />
      <div class='contact_form_field_container'>
        <span>Email</span>
        <br />
        <input type='text' name='email' id='email' />
      </div>
      <br />
      <div class='contact_form_field_container'>
        <span>Message</span>
        <br />
        <textarea name='message' id='message' rows='10'></textarea>
      </div>
      <div class='contact_form_field_container contact_form_field_container--contact'>
        <input type='button' name='submit' id='submit' value='Send' />
      </div>
    </div>
  </div>
`;

class Contact extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(contactTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-contact', Contact)