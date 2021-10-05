// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  abstract length: number;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  sort(): void {
    const { length } = this;

    console.log({ length });

    for (let i = 0; i < length; i++) {
      console.log('i');
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
