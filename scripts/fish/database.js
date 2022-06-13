const database = {
  fish: [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2017/10/30/05/58/discus-fish-2901528__180.jpg',
      name: 'Dorothy',
      species: 'Discus',
      length: 23,
      location: 'Venezuala',
      locationImage:
        'https://cdn.pixabay.com/photo/2017/04/08/17/34/beach-2213852__180.jpg',
      diet: 'Dominos Pizza',
      tips: 'Water Temperature',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/originals/d0/40/3e/d0403e1f1aecea617b3413a96a04af98.jpg',
      name: 'Bert',
      species: 'Wolf Cichlid',
      length: 26,
      location: 'Costa Rica Moin River',
      diet: 'Wild Salmon',
      tips: 'Feeding Practices',
    },
    {
      id: 3,
      image:
        'https://as2.ftcdn.net/jpg/02/54/77/75/220_F_254777516_LPEDc2P0TsWJHhs9Q7JHccXwJEtIPzNb.jpg',
      name: 'Bert',
      species: 'Red Head Cichlid',
      length: 12,
      location: 'Usumacinta River',
      diet: 'Grapefruit',
      tips: 'Essential Care',
    },
    {
      id: 4,
      image: 'https://live.staticflickr.com/65535/49607159957_74750a1e40_n.jpg',
      name: 'Bert',
      species: 'Scorpion Fish',
      length: 7,
      location: 'Red Sea',
      diet: 'Sriracha',
      tips: 'Tank Cleaning',
    },
    {
      id: 5,
      image:
        'https://p0.piqsels.com/preview/853/1002/512/balloonfish-corals-fish-nature-thumbnail.jpg',
      name: 'Bert',
      species: 'Dwarf Pufferfish',
      length: 6,
      location: 'Western Ghats',
      diet: 'Croutons',
      tips: 'Feeding',
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

// Fish whose length is divisible by 3
export const mostHolyFish = () => {
  const holyFish = [];
  for (const fish of fish) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }
  return holyFish;
};

// Fish whose length is divisible by 5
export const soldierFish = () => {
  const soldierFish = [];
  for (const fish of fish) {
    if (fish.length % 5 === 0) {
      soldierFish.push(fish);
    }
  }
  return soldierFish;
};

// Fish whose length is NOT divisible by 3 OR 5
export const nonHolyFish = () => {
  const nonHolyFish = [];
  for (const fish of database.fish) {
    if (fish.length % 3 !== 0 || fish.length % 5 !== 0) {
      nonHolyFish.push(fish);
    }
  }
  return nonHolyFish;
};
