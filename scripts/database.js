const database = {
  fish: [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2017/10/30/05/58/discus-fish-2901528__180.jpg',
      name: 'Dorothy',
      species: 'Discus',
      length: 2,
      location: 'Amazon',
      food: 'Dominos Pizza',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/originals/d0/40/3e/d0403e1f1aecea617b3413a96a04af98.jpg',
      name: 'Bert',
      species: 'Wolf Cichlid',
      length: 4,
      location: 'Costa Rica Moin River',
      food: 'Wild Salmon',
    },
    {
      id: 3,
      image:
        'https://as2.ftcdn.net/jpg/02/54/77/75/220_F_254777516_LPEDc2P0TsWJHhs9Q7JHccXwJEtIPzNb.jpg',
      name: 'Bert',
      species: 'Red Head Cichlid',
      length: 5,
      location: 'Usumacinta River',
      food: 'Grapefruit',
    },
    {
      id: 4,
      image: 'https://live.staticflickr.com/65535/49607159957_74750a1e40_n.jpg',
      name: 'Bert',
      species: 'Scorpion Fish',
      length: 6,
      location: 'Red Sea',
      food: 'Sriracha',
    },
    {
      id: 5,
      image:
        'https://p0.piqsels.com/preview/853/1002/512/balloonfish-corals-fish-nature-thumbnail.jpg',
      name: 'Bert',
      species: 'Dwarf Pufferfish',
      length: 1,
      location: 'Western Ghats',
      food: 'Croutons',
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
