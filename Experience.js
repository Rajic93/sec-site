const experienceTemplate = document.createElement('template');
experienceTemplate.innerHTML = `
  <style>
    span {
      font-family: Montserrat;
      color: #003170 !important;
    }
    h1 {
      font-family: Montserrat;
    }

    .experience {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #2F74CF;
      background: radial-gradient(at center, #2F74CF, #003170);
      width: 100%;
      padding: 50px;
      border-bottom: 5px solid #ffde59;
    }

    .experience-heading {
      color: #FFDE59;
      margin-bottom: 50px;
      font-size: 36px;
    }

    .experience_content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .experience_container {
      width: 250px;
      height: 350px;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;
    }

    .experience_container--active {
      transform: scale(1.1);
    }

    @media (max-width: 986px) {
      .experience_container {
        width: 90%;
        flex-direction: column;
        align-items: center;
        padding-right: 5%;
        padding-left: 5%;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .experience_container:first-child {
        padding-top: 50px;
      }

      .experience_quality_icon {
        margin-top: 50px;
      }

      .experience_learning_icon {
        margin-top: 50px;
      }

      .experience_innovation_icon {
        margin-top: 50px;
      }
    }


    .experience_quality_icon {
      display: block;
      right: 10%;
      top: 50px;
    }

    .experience_learning_icon {
      display: block;
      left: 10%;
      bottom: 350px;
    }

    .experience_innovation_icon {
      display: block;
      right: 10%;
      bottom: 50px;
    }

    .experience_title {
      font-size: 32px;
    }

    .experience_subtitle {
      font-size: 18px;
    }

    .experience_text--gold {
      color: #FFDE59;
    }

    .experience_text--gold {
      color: #FFDE59;
    }

    .experience_text--light {
      color: #FFFFFF;
    }

    .experience_text--quality {
      display: block;
      left: 10%;
      top: 80px;
    }

    .experience_text--learning {
      display: block;
      right: 10%;
      bottom: 400px;
    }

    .experience_text--innovation {
      display: block;
      left: 10%;
      bottom: 150px;
    }

    .experience-dot {
      width: 20px;
      height: 20px;
      border-radius: 50px;
      background: #FFFFFF;
      margin: 5px;
    }

    .margin-top {
      margin-top: 50px;
    }

    .experience_icon_container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

  </style>
  <div class='experience'>
    <h1 class='experience-heading'>Experience</h1>
    <div class='experience_content'>
      <div class='experience_container'>
        <div class='experience_icon_container'>
          <sec-fintech-icon class='experience_quality_icon'></sec-quality-icon>
        </div>
        <span class='experience_title experience_text--gold experience_text--quality'>Fintech
          <br />
          <span class='experience_subtitle experience_text--light'>Jump starting financial platforms. </span>
        </span>
      </div>
      <div class='experience_container experience_container--active'>
        <div class='experience_icon_container'>
          <sec-environmental-icon class='experience_learning_icon'></sec-learning-icon>
        </div>
        <span class='experience_title experience_text--gold experience_text--learning'>Environmental
          <br />
          <span class='experience_subtitle experience_text--light'>Making an impact through green projects.</span>
        </span>
      </div>
      <div class='experience_container'>
        <div class='experience_icon_container'>
          <sec-logistics-icon class='experience_innovation_icon'></sec-innovation-icon>
        </div>
        <span class='experience_title experience_text--gold experience_text--innovation'>Logistics
          <br />
          <span class='experience_subtitle experience_text--light'>Transforming the way logistics are done.</span>
        </span>
      </div>
    </div>
    <div class='experience_content margin-top'>
      <div class='experience-dot'></div>
      <div class='experience-dot'></div>
      <div class='experience-dot'></div>
    </div>
  </div>
`;

class Experience extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.append(experienceTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-experience', Experience);
