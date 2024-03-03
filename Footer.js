const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    span {
      font-family: Montserrat;
    }
    h1 {
      font-family: Montserrat;
    }
    
    .footer {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #2F74CF;
      background: radial-gradient(at center, #2F74CF, #003170);
      padding: 100px 50px;
    }

    .footer_text {
      color: #FFFFFF;
      margin-bottom: 50px;
      font-size: 20px;
      border-right: 1px solid #FFDE59;
      padding-right: 10px;
      margin-right: 10px;
    }

    .footer_text:last-child {
      border-right: none;
      padding-right: 0;
      margin-right: 0;
    }

    .footer_text--gold {
      color: #FFDE59;
    }

    .footer_text a {
      text-decoration: none;
      color: #FFFFFF;
    }

    .no-border {
      border: none;
    }

    .no-margin {
      margin: 0;
    }
  </style>
  <div class='footer'>
    <div>
      <span class='footer_text footer_text--gold no-border no-margin'>Contact:</span>
      <span class='footer_text'><a href='mailto: softwareengineeringcrafted@gmail.com'>softwareengineeringcrafted@gmail.com</a></span>
    </div>
    <br />
    <div>  
      <span class='footer_text'>Software Engineering <span class='footer_text--gold'>Crafted</span></span>
      <span class='footer_text'>Nis, Serbia</span>
      <span class='footer_text'>2024</span>
    </div>
  </div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(footerTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-footer', Footer)