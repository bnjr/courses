import { NumbersCollections } from './NumbersCollections';
import { CharactersCollections } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const numbersCollections = new NumbersCollections([4, 5, 2, -1]);
numbersCollections.sort();
console.log(numbersCollections.data);

const charactersCollections = new CharactersCollections('aabXY');
charactersCollections.sort();
console.log(charactersCollections.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(8);
linkedList.add(70);
linkedList.add(4);
linkedList.sort();
console.log(linkedList.print());
