import { Sorter } from './Sorter';

export class CharactersCollections extends Sorter{
  constructor(public data: string) {
    super());
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  get length(): number{
    return this.data.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const leftHand = this.data[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    
    this.data = characters.join('');
  }
}
