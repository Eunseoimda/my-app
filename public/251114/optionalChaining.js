function printCatName(user) {
  console.log(user.cat?.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}

printCatName(user1); // Crew
