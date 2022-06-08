const database = {
  fish: [
    {
      image: 'https://thumbs.dreamstime.com/t/discus-fish-2866088.jpg',
      name: 'Bert',
      species: 'Banggai Cardinalfish',
      length: 3,
      location: 'South Pacific',
      food: 'crustaceans',
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
