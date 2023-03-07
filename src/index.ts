import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("XaabY");
const sorter = new Sorter(charactersCollection);

sorter.sort();
// console.log(numbersCollection.data);
console.log(charactersCollection.data);
