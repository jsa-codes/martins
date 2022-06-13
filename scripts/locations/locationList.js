import { getFish } from '../fish/database.js';

export const locationList = () => {
  let fishes = getFish();
  let htmlLocations = `<section class="harvestLocations">
          <div class="leftHeader">
            <h2 id="leftContentHeading">Harvesting Locations</h2>
          </div>`;

  for (const fish of fishes) {
    htmlLocations += `<section class="fishCard">
          <div class= 'locations'>
            <img class="fishImages image__card" src="${fish.image}" />
          </div>
          <div class="fishInfo">
          <div class="fish__location fishInfo">Location: ${fish.location}</div>
            <div class="fish__name fishInfo">Name: ${fish.locationImage}</div>
          </div>
        </section>
        `;
  }
  htmlLocations += `</section>`;
  return htmlLocations;
};
