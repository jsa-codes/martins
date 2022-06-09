// Importing a copy (a result of the map method) of the array of fish objects
import { getFish } from './database';

// Create function to export html representation of fish
export const FishList = () => {
  // INVOKING the imported function from database module
  // fishes = the resulting database of fish from the getFish function
  const fishes = getFish();

  // Create HTML representation of each fish
  const htmlString = '<article class= "fishList">';
  // Iterate the array of fish objects - building the html from the key value pairs in the array of fish objects
  for (const fish of fishes) {
    htmlString += `<section class="fish__card">
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`;
  }
  htmlString += '</article>';
  return htmlString;
};
