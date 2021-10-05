import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbers = new NumberCollection([1, -2, 3, 7, -8, 0]);

// const sorter = new Sorter(numbers);
// sorter.sort();
// console.log(numbers.data);
// console.log(sorter.collection);

const characters = new CharactersCollection('hyadytkhda');
characters.sort();
console.log({ characters });

const linkedList = new LinkedList();

linkedList.addNode(9);
linkedList.addNode(7);
linkedList.addNode(5);
linkedList.addNode(5);
linkedList.addNode(8);

linkedList.sort();
linkedList.print();
