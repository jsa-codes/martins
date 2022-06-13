import { getFish } from '../fish/database.js';

export const tipList = () => {
  let fishes = getFish();

  let htmlTips = `<aside class="careTips">
      <h3>Martin's Fish Care Tips</h3>`;

  for (const fish of fishes) {
    htmlTips += `<section class="fishCard">
          <div class="fishInfo">
            <div class="fish__name fishInfo">Name: ${fish.name}</div>
            <div class="fish__species fishInfo">Species: ${fish.tips}</div>
          </div>
        </section>
        `;
  }
  htmlTips += `</aside>`;
  return htmlTips;
};
