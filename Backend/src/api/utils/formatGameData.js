const formatGameData = (games) => {
  return games.map((game) => ({
    id: game.id,
    name: game.name,
    description: game.slug,
    price: Math.floor(Math.random() * 60) + 10, // temporary fake price
    imgUrl: game.background_image,
    inStock: true,
    isPopular: game.rating > 4,
  }));
};

module.exports = formatGameData;