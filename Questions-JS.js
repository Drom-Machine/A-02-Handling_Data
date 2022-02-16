const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activities: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activities: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activities: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mapData = userData.map((user) => {
    return {
        id: user.id,
        favoriteFoods: user.favorites.food.length,
    };
});

console.log(mapData);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']


const reducePizzaFavs = userData.reduce((accumulator, user) => {

  const pizzaPics = user.favorites.food.includes('pizza')
  if(pizzaPics){
    return [...accumulator, user.name]
  }
  return accumulator

}, [])

console.log(reducePizzaFavs);

// 7. Show us an example of a switch statement being used

switch ("pizza") {
      case "burgers":

        console.log("Thank you for ordering Combo #1. Would you like fries with that?");
        break;

      case "tacos":

        console.log("Thank you for ordering Combo #2. Would you like nachos with that?");
        break;

      case "fried chicken":

          console.log("That Combo has been canceled. You should make better life choices.");
          break;
};
