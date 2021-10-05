import { Sorter } from './Sorter';
import { LinkedListNode } from './Node';

export class LinkedList extends Sorter {
  head: LinkedListNode | null = null;

  addNode(data: number): void {
    console.log('Adding node...');
    const newNode = new LinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = newNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let size = 1;
    let selectedNode = this.head;

    if (selectedNode) {
      while (selectedNode.next) {
        selectedNode = selectedNode.next;
        size++;
      }
    }

    return size;
  }

  at(index: number): LinkedListNode {
    if (!this.head || index > this.length - 1) {
      throw new Error('Index out of range.');
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    console.log('Comparing Nodes...');

    if (!this.head) {
      throw new Error('Nothing to compare');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    console.log('Swapping nodes...');

    const leftHandData = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHandData;
  }

  print(): void {
    console.log('Printing...');

    if (!this.head) {
      console.log('Empty');
      return;
    }

    let currentNode: LinkedListNode | null = this.head;

    for (let i = 0; i < this.length; i++) {
      if (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }

    // while (currentNode) {
    //   // if (currentNode.next) {
    //   console.log(currentNode.data);
    //   currentNode = currentNode.next;
    //   // }
    // }
  }
}
