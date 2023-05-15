// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

const twoFer = (name: string = 'you'): string => {
  return `one for ${ name }, one for me`;
}

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  if (year % 400 === 0) return true;
  return false;
}


function printName(person: { first: string, last: string }): string {
  return `${ person.first } ${ person.last }`
}
printName({ first: 'Sean', last: 'Watson' })


// OBJECTS

// let coodinate: { x: number, y: number } = { x: 34, y: 2 }
// function randomCoordinate(): { x: number, y: number } {
//   return { x: Math.random(), y: Math.random() }
// }


// TYPE ALIASES
// type Point = { x: number, y: number }

// let coodinate: Point = { x: 34, y: 2 }
// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() }
// }

// function doubltPoint( point: Point ): Point {
//   return { x: point.x * 2, y: point.y * 2 }
// }


type Song = {
  title: string, artist: string, numStreams: number, credits: { producer: string, writer: string }
}


function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033
}

const printSong = (song: Song): void => {
  console.log(`${ song.title } - ${ song.artist }`)
}

const mySong: Song = {
  title: "Trust Fall",
  artist: "P!nk",
  numStreams: 12345,
  credits: {
    producer: "Some Guy",
    writer: "Some other person"
  }
}

const earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)

type Point = { 
  x: number, 
  y: number, 
  z?: number // here, the ? makes the z key optional for the type
}

type User = {
  readonly id: number, // the readonly modifier here prevents us from writing code that will write over this value...useful for when you don't want things to accidentally get changed in code.
  username: string,
}


type Circle = { radius: number }
type Colorful = { color: string }

type ColorfulCircle = Circle & Colorful
const happyFace: ColorfulCircle = { radius: 4, color: 'yellow' }



