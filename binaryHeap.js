// Find children of Parent Node index
// Left child is stored at 2n + 1
// The right child is stored at 2n + 2

//Find parent node of children
// (n-1) / 2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element; // switch childIndex with parentIndex
      this.values[idx] = parent; // switch childIndex with parentIndex
      idx = parentIdx; // reset idx to parentIdx
    }

    extractMax() {
      const max = this.values[0];
      const end = this.values.pop();
      
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
