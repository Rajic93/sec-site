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
    }

    .vision_half {
      width: 100%;
      height: 50vh;
      max-heigh: 512px;
    }
    .vision_upper {
      width: 100%;
      height: 40vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 50px;
      padding-left: 10%;
      padding-right: 10%;
    }

    .vision_lower {
      width: 100%;
      height: 60vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .vision_content {
      padding-top: 100px;
      padding-left: 10%;
      padding-right: 10%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: 986px) {
      .vision_content {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        padding-top: 200px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .vision_upper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        height: auto !important;
        padding-left: 0;
        padding-right: 0;
      }

      .vision_title {
        display: block;
        width: 55% !important;
        max-width: 425px;
      }

      .vision_lower {
        height: auto;
      }

      .vision_text--low {
        display: block;
        width: 55% !important;
        max-width: 425px;
        margin-bottom: 50px;
      }
    }  

    @media (max-width: 684px) {
      .vision_half--clipped {
        clip-path: none !important;
      }

      .vision_title {
        padding-bottom: 50px;
      }

      .vision_content {
        padding-top: 50px;
      }
    }

    .vision_half--clipped {
      clip-path: polygon(0% 8%, 4% 13%, 7% 15%, 11% 16%, 15% 17%, 19% 18%, 24% 19%, 28% 20%, 34% 21%, 37% 21%, 42% 21%, 47% 21%, 52% 21%, 56% 21%, 62% 21%, 68% 20%, 73% 19%, 77% 18%, 81% 17%, 87% 15%, 89% 14%, 96% 11%, 100% 9%, 100% 100%, 0% 100%);
      z-index: 1;
    }

    .vision_half--bg-light {
      background: #ffffff;
    }

    .vision_half--bg-gold {
      background: #FFDE59;
      padding-top: 5px;
    }
    .vision_half--relative {
      position: relative;
    }
    .vision--relative {
      position: relative;
    }
    .vision--absolute {
      position: absolute;
    }
    .vision_low--bg {
      bottom: 5px;
      z-index: 0;
    }

    .vision_text {
      bottom: 20px;
      left: 10%;
      width: 30%;
      font-size: 24px;
      text-align: left;
      color: #003986;
    }
    .vision_text--low {
      display: block;
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
      top: -300px;
      right: 0;
      opacity: 0.3;
    }

    .vision_icon {
      display: block;
      right: 10%;
      bottom: 50px;
    }

    .vision_icon svg {
      height: 300px;
    }
  </style>
  <div class='vision vision--relative'>
    <div class='vision_upper vision_half--relative'>
      <sec-code-background class='vision-code-backgroud'></sec-code-background>
      <span class='vision_text vision_text--light vision_title'>We believe <span class='vision_text--gold'>software engineering</span></br> is a <span class='vision_text--gold'>craft</span>
        <br />
        <br />
        <span class='vision_subtitle'>A blend of art, skill and technology.</span>
      </span>
      
    </div>
    <div class='vision_lower vision_half--bg-gold vision_half--clipped vision_low--bg'>
      <div class='vision_lower vision_half--bg-light vision_half--clipped vision_half--relative'>
        <div class='vision_content'>
          <span class='vision_text--low'>Every line of code we write is part of a larger masterpiece, meticulously crafted to ensure precision, beauty and durability.</span>
          <sec-vision-icon class='vision_icon'></sec-vision-icon>
        </div>
      </div>
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
