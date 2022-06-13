// import { getFish } from './database.js';
// import { FishList } from './FishList.js';

// Importing both modules from the fish subdirectory
import { getFish } from './fish/database.js';
import { FishList } from './fish/FishList.js';

const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
}

const parentHTMLElement = document.querySelector('.fishList');

parentHTMLElement.innerHTML = FishList();
