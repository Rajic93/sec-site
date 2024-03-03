const visionTemplate = document.createElement('template');
visionTemplate.innerHTML = `
  <style>
    span {
      font-family: Montserrat;
    }

    .vision {
      background: #2F74CF;
      background: radial-gradient(at center, #2F74CF, #003170);
      width: 100%;
      height: 100vh;
      max-height: 1024px;
    }

    .vision_half {
      width: 100%;
      height: 50vh;
      max-heigh: 512px;
    }
    .vision_upper {
      width: 100%;
      height: 40vh;
    }

    .vision_lower {
      width: 100%;
      height: 60vh;
    }
    .vision_half--clipped {
      clip-path: polygon(0% 8%, 4% 13%, 7% 15%, 11% 16%, 15% 17%, 19% 18%, 24% 19%, 28% 20%, 34% 21%, 37% 21%, 42% 21%, 47% 21%, 52% 21%, 56% 21%, 62% 21%, 68% 20%, 73% 19%, 77% 18%, 81% 17%, 87% 15%, 89% 14%, 96% 11%, 100% 9%, 100% 100%, 0% 100%);
      
    }

    .vision_half--bg-light {
      background: #ffffff;
    }
    .vision_half--relative {
      position: relative;
    }

    .vision_text {
      position: absolute;
      bottom: 20px;
      left: 10%;
      width: 30%;
      font-size: 24px;
      text-align: left;
      color: #003986;
    }
    .vision_text--low {
      position: absolute;
      bottom: 15vh;
      left: 10%;
      width: 30%;
      font-size: 24px;
      text-align: left;
      color: #003986;
      z-index: 999;
    }

    .vision_text--light {
      color: #ffffff;
    }

    .vision_title {
      font-size: 36px;
      width: 60%;
      z-index: 999;
    }

    .vision_subtitle {
      font-size: 28px;
    }

    .vision_text--gold {
      color: #FFDE59;
    }

    .vision-code-backgroud svg {
      position: absolute;
      top: -225px;
      right: 0;
      opacity: 0.3;
    }

    .vision_icon {
      position: absolute;
      right: 10%;
      bottom: 50px;
    }

    .vision_icon svg {
      height: 300px;
    }
  </style>
  <div class='vision'>
    <div class='vision_upper vision_half--relative'>
      <sec-code-background class='vision-code-backgroud'></sec-code-background>
      <span class='vision_text vision_text--light vision_title'>We believe <span class='vision_text--gold'>software engineering</span></br> is a <span class='vision_text--gold'>craft</span>
        <br />
        <br />
        <span class='vision_subtitle'>A blend of art, skill and technology.</span>
      </span>
      
    </div>
    <div class='vision_lower vision_half--bg-light vision_half--clipped vision_half--relative'>
      <span class='vision_text--low'>Every line of code we write is part of a larger masterpiece, meticulously crafted to ensure precision, beauty and durability.</span>
      <sec-vision-icon class='vision_icon'></sec-vision-icon>
    </div>
  </div>
`;

class Vision extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.append(visionTemplate.content.cloneNode(true));
  }
}

customElements.define('sec-vision', Vision);
