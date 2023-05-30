// Typeof Narrowing:

function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3)
  }
  return value * 3
  // by the time we get here, TypeScript knows we've narrowed down what value could be
}

// Truthiness Narrowing:

const el = document.getElementById('idk')
if (el) {
  el // here TS has ruels out the null option
} else {
  el // here it has deduced that if we get to this block of code, it must be null value
}

const printLetters = (word?: string) => { // ? meas an argument is optional, but that makes it undefined as a second option
  if (word) { // because a string is truthy, we go to the next stepp
    for (let char of word) { // and TS knows that word is a string, not undefined, so ti will let us iterate over the string
      console.log(char) 
    }
  } else { // sine its' falsey down here, TS won't let us iterate over "word"
    console.log('You did not pass in a word!')
  }
}

// EQUALITY NARROWING

function someDemo(x: string | number, y: string | boolean) {
  x
}

// IN Operator Narrowing

// interface Movie {
//   title: string,
//   duration: number
// }

// interface TVTShow {
//   title: string,
//   numEpisodes: number,
//   episodeDuration: number
// }

// function getRuntime(media: Movie | TVTShow) {
//   if ("numEpisodes" in media) {
//     return media.numEpisodes * media.episodeDuration
//   }
//   return media.duration
// }

// console.log(getRuntime({ title: 'Harry Potter', duration: 140 }))
// console.log(getRuntime({ title: 'SpongeBob', numEpisodes: 80, episodeDuration: 30 }))





// Instanceof Narrowing:

function printFullDate(date: string | Date) {
  if ( date instanceof Date ) {
    date
    console.log(date.toUTCString())
  } else {
    console.log(new Date(date).toUTCString())
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  // if ("username" in entity) {}
  if (entity instanceof User) {
    entity
  } else {
    entity
  }
}

// Type Predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return 'Meow';
  } else {
    animal;
    return 'Woof'
  }
}

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster"; // this key is the discriminator type, and each of these interfaces in the union must have this field in common
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep; // union type

function getFarmAnimalSound(animal: FarmAnimal) {
  animal;
  switch (animal.kind) {
    case "pig":
      animal;
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baaa!";
    default:
      // We should never make it here, if we handled all cases correctly
      //   const shouldNeverGetHere: never = animal;
      //   return shouldNeverGetHere
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));



