const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
    .header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      color: #003986;
      background: #FFFFFF;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 10%;
      padding-right: 10%;
      border-bottom: 1px solid #E4E3E6;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .header_content_container {
      display: flex;
      justify-content: start;
      align-items: center;
    }

    .header_content_item {
      margin: 0 8px;
      padding-left: 8px;
      padding-right: 16px;
      border-right: 1px solid grey;
    }
    .header_content_item:last-child {
      margin-right: 0;
      padding-right: 0;
      border-right: none;
    }
  </style>
  <div class='header'>
    <sec-logo></sec-logo>
    <div class='header_content_container'>
      <span class='header_content_item'>Vision</span>
      <span class='header_content_item'>Services</span>
      <span class='header_content_item'>Past Work</span>
      <span class='header_content_item'>Contact</span>
    </div>
  </div>
`

class Header extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.append(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-header', Header);