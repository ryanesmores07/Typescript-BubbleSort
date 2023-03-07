"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            // Last i elements are already in place
            for (let j = 0; j < length - i - 1; j++) {
                // Checking if the item at present iteration
                // is greater than the next iteration
                if (this.collection[j] > this.collection[j + 1]) {
                    // If the condition is true then swap them
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
        console.log(this.collection);
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
