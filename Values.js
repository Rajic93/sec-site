const valuesTemplate = document.createElement('template');
valuesTemplate.innerHTML = `
  <style>
    span {
      font-family: Montserrat;
    }

    .values {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #2F74CF;
      background: radial-gradient(at center, #2F74CF, #003170);
      width: 100%;
      border-bottom: 5px solid #ffde59;
    }

    .values_container {
      width: 80%;
      max-width: 1024px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-right: 10%;
      padding-left: 10%;
      padding-bottom: 100px;
    }

    .values_container:first-child {
      padding-top: 100px;
    }

    @media (max-width: 986px) {
      .values_container {
        width: 90%;
        flex-direction: column;
        align-items: center;
        padding-right: 5%;
        padding-left: 5%;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .values_container:first-child {
        padding-top: 50px;
      }

      .values_quality_icon {
        margin-top: 50px;
      }

      .values_learning_icon {
        margin-top: 50px;
      }

      .values_innovation_icon {
        margin-top: 50px;
      }
    }

    @media (min-width: 986px) {
      .values_container--reverse {
        flex-direction: row-reverse;
      }
    }

    .values_quality_icon {
      display: block;
      right: 10%;
      top: 50px;
    }

    .values_learning_icon {
      display: block;
      left: 10%;
      bottom: 350px;
    }

    .values_innovation_icon {
      display: block;
      right: 10%;
      bottom: 50px;
    }

    .values_title {
      font-size: 36px;
    }

    .values_subtitle {
      font-size: 24px;
    }

    .values_text--gold {
      color: #FFDE59;
    }

    .values_text--gold {
      color: #FFDE59;
    }

    .values_text--light {
      color: #FFFFFF;
    }

    .values_text--quality {
      display: block;
      left: 10%;
      top: 80px;
    }

    .values_text--learning {
      display: block;
      right: 10%;
      bottom: 400px;
    }

    .values_text--innovation {
      display: block;
      left: 10%;
      bottom: 150px;
    }

  </style>
  <div class='values'>
    <div class='values_container'>
      <span class='values_title values_text--gold values_text--quality'>Quality
        <br />
        <span class='values_subtitle values_text--light'>We adhere to strict quality controls,<br /> including code reviews,<br /> automated testing<br /> and continuous integration</span>
      </span>
      <sec-quality-icon class='values_quality_icon'></sec-quality-icon>
    </div>
    <div class='values_container values_container--reverse'>
      <span class='values_title values_text--gold values_text--learning'>Continous Learning
        <br />
        <span class='values_subtitle values_text--light'>Our team stays ahead by<br /> continuously exploring new<br /> technologies and best<br /> practices.</span>
      </span>
      <sec-learning-icon class='values_learning_icon'></sec-learning-icon>
    </div>
    <div class='values_container'>
      <span class='values_title values_text--gold values_text--innovation'>Innovation
        <br />
        <span class='values_subtitle values_text--light'>Collaboration across projects<br /> fuels our innovative solutions.</span>
      </span>
      <sec-innovation-icon class='values_innovation_icon'></sec-innovation-icon>
    </div>
  </div>
`;

class Values extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.append(valuesTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-values', Values);
