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
      .services_container:last-child {
        padding-top: 0 !important;
      }

      .no-padding-bt {
        padding-bottom: 0 !important;
      }

      .line-icon {
        display:none
      }

      .services-code-backgroud svg {
        top: -400px !important;
        right: -400px !important;
      }
    }

    @media (min-width: 986px) {
      .services_container--reverse {
        flex-direction: row-reverse;
      }

      .addition-padding-lg-100 {
        padding-top: 150px !important;
      }
      .addition-padding-lg-50 {
        padding-top: 50px !important;
      }

      .line-icon-1 {
        position: absolute;
        bottom: -150px;
        right: 32%;
        transform: rotate(-25deg);
      }

      .line-icon-2 {
        position: absolute;
        bottom: -90px;
        left: 38%;
        transform: rotate(-110deg);
      }
    }
    .position-relative {
      position: relative;
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
      display: block;
      font-size: 32px;
      padding-top: 50px;
      margin-bottom: 50px;
    }

    .services_subtitle {
      font-size: 20px;
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

    .no-margin {
      margin: 0 !important;
    }

    .services-code-backgroud svg {
      fill: #003986;
      position: absolute;
      top: -350px;
      right: -250px;
    }
    .services-code-backgroud svg * {
      fill: #003986;
    }
    
    .no-overflow {
      overflow: hidden;
    }
  </style>
  <div class='services position-relative no-overflow'>
    <sec-code-background class='services-code-backgroud'></sec-code-background>
    <div class='services_container no-padding-bt addition-padding-lg-50 position-relative'>
      <span class='services_title services_text--bold services_text--quality'>Custom Software Development
        <br />
        <span class='services_subtitle'>Tailored solutions for unique business needs.</span>
      </span>
      <sec-software-development-icon class='services_software-development_icon'></sec-software-development-icon>
      <sec-line-icon class='line-icon line-icon-1'></sec-line-icon>
    </div>
    <div class='services_container services_container--reverse no-padding-bt position-relative'>
      <span class='services_title services_text--bold services_text--learning no-margin addition-padding-lg-100'>Mobile & Web Development
        <br />
        <span class='services_subtitle'>Engaging apps with seamless user experiences.</span>
      </span>
      <sec-mobile-web-development-icon class='services_mobile-web-development_icon'></sec-mobile-web-development-icon>
      <sec-line-icon class='line-icon line-icon-2'></sec-line-icon>
    </div>
    <div class='services_container'>
      <span class='services_title services_text--bold services_text--innovation'>Cloud Solutions
        <br />
        <span class='services_subtitle'>Scalable and secure cloud-based services.</span>
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
