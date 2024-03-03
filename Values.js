const valuesTemplate = document.createElement('template');
valuesTemplate.innerHTML = `
  <style>
    span {
      font-family: Montserrat;
    }

    .values {
      position: relative;
      background: #2F74CF;
      background: radial-gradient(at center, #2F74CF, #003170);
      width: 100%;
      height: 100vh;
      max-height: 1024px;
      max-height: 1024px;
      border-bottom: 5px solid #ffde59;
    }

    .values_quality_icon {
      position: absolute;
      right: 10%;
      top: 50px;
    }

    .values_learning_icon {
      position: absolute;
      left: 10%;
      bottom: 350px;
    }

    .values_innovation_icon {
      position: absolute;
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
      position: absolute;
      left: 10%;
      top: 80px;
    }

    .values_text--learning {
      position: absolute;
      right: 10%;
      bottom: 400px;
    }

    .values_text--innovation {
      position: absolute;
      left: 10%;
      bottom: 150px;
    }

  </style>
  <div class='values'>
    <span class='values_title values_text--gold values_text--quality'>Quality
      <br />
      <span class='values_subtitle values_text--light'>We adhere to strict quality controls,<br /> including code reviews,<br /> automated testing<br /> and continuous integration</span>
    </span>
    <sec-quality-icon class='values_quality_icon'></sec-quality-icon>
    <span class='values_title values_text--gold values_text--learning'>Continous Learning
      <br />
      <span class='values_subtitle values_text--light'>Our team stays ahead by<br /> continuously exploring new<br /> technologies and best<br /> practices.</span>
    </span>
    <sec-learning-icon class='values_learning_icon'></sec-learning-icon>
    <span class='values_title values_text--gold values_text--innovation'>Innovation
      <br />
      <span class='values_subtitle values_text--light'>Collaboration across projects<br /> fuels our innovative solutions.</span>
    </span>
    <sec-innovation-icon class='values_innovation_icon'></sec-innovation-icon>
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
