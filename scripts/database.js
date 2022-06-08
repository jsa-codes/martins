const database = {
  fish: [
    {
      species: 'Banggai Cardinalfish',
      name: 'Bert',
      food: 'crustaceans',
      size: 3,
      weight: '2.4lbs',
      harvestDate: '6-8-2022',
      harvestLocation: 'South Pacific',
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
