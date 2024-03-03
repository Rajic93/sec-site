const servicesTemplate = document.createElement('template');
servicesTemplate.innerHTML = `
  <style>
    span {
      font-family: Montserrat;
    }

    .services {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #FFFFFF;
      width: 100%;
      border-bottom: 5px solid #ffde59;
    }

    .services_container {
      width: 80%;
      max-width: 1024px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-right: 10%;
      padding-left: 10%;
      padding-bottom: 100px;
    }

    .services_container:first-child {
      padding-top: 100px;
    }

    @media (max-width: 986px) {
      .services_container {
        width: 90%;
        flex-direction: column;
        align-items: center;
        padding-right: 5%;
        padding-left: 5%;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .services_container:first-child {
        padding-top: 50px;
      }

      .services_quality_icon {
        margin-top: 50px;
      }

      .services_learning_icon {
        margin-top: 50px;
      }

      .services_innovation_icon {
        margin-top: 50px;
      }
    }

    @media (min-width: 986px) {
      .services_container--reverse {
        flex-direction: row-reverse;
      }
    }

    .services_quality_icon {
      display: block;
      right: 10%;
      top: 50px;
    }

    .services_learning_icon {
      display: block;
      left: 10%;
      bottom: 350px;
    }

    .services_innovation_icon {
      display: block;
      right: 10%;
      bottom: 50px;
    }

    .services_title {
      font-size: 36px;
    }

    .services_subtitle {
      font-size: 24px;
    }

    .services_text--bold {
      color: #003986;
      font-weight: bolder !important;
    }

    .services_text--light {
      color: #FFFFFF;
    }

    .services_text--quality {
      display: block;
      left: 10%;
      top: 80px;
    }

    .services_text--learning {
      display: block;
      right: 10%;
      bottom: 400px;
    }

    .services_text--innovation {
      display: block;
      left: 10%;
      bottom: 150px;
    }

  </style>
  <div class='services'>
    <div class='services_container'>
      <span class='services_title services_text--bold services_text--quality'>Custom Software Development
        <br />
        <span class='services_subtitle services_text--light'>We adhere to strict quality controls,<br /> including code reviews,<br /> automated testing<br /> and continuous integration</span>
      </span>
      <sec-software-development-icon class='services_software-development_icon'></sec-software-development-icon>
    </div>
    <div class='services_container services_container--reverse'>
      <span class='services_title services_text--bold services_text--learning'>Mobile & Web Development
        <br />
        <span class='services_subtitle services_text--light'>Our team stays ahead by<br /> continuously exploring new<br /> technologies and best<br /> practices.</span>
      </span>
      <sec-mobile-web-development-icon class='services_mobile-web-development_icon'></sec-mobile-web-development-icon>
    </div>
    <div class='services_container'>
      <span class='services_title services_text--bold services_text--innovation'>Cloud Solutions
        <br />
        <span class='services_subtitle services_text--light'>Collaboration across projects<br /> fuels our innovative solutions.</span>
      </span>
      <sec-cloud-solutions-icon class='services_cloud-solutions_icon'></sec-cloud-solutions-icon>
    </div>
  </div>
`;

class Services extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.append(servicesTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-services', Services);
