// #Hard #Top_100_Liked_Questions #Sorting #Two_Pointers #Design #Heap_Priority_Queue #Data_Stream
// #Big_O_Time_O(n*log_n)_Space_O(n) #2024_12_21_Time_97_ms_(98.11%)_Space_81.4_MB_(85.26%)

var MedianFinder = function() {
    this.minHeap = [] // for storing second half of sorted numbers
    this.maxHeap = [] // for storing first half of sorted numbers
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.length == 0) {
      this.maxHeap.push(num)
      return
    }

    if(this.minHeap.length == 0) {
      if(this.maxHeap[0] > num) {
        this.minHeap.push(this.maxHeap[0])
        this.maxHeap[0] = num
      } else {
        this.minHeap.push(num)
      }

      return
    }

    if(this.maxHeap[0] < num) { // add to min heap
      this.minHeap.push(num)

      let idx = this.minHeap.length - 1
      let parent = Math.floor(idx / 2)
      let heap = this.minHeap

      while(parent >= 0 && heap[parent] > heap[idx]) {
        let swap = heap[parent]
        heap[parent] = heap[idx]
        heap[idx] = swap

        idx = parent
        parent = Math.floor(idx / 2)
      }
    } else { // add to max heap
      this.maxHeap.push(num)

      let idx = this.maxHeap.length - 1
      let parent = Math.floor(idx / 2)
      let heap = this.maxHeap

      while(parent >= 0 && heap[parent] < heap[idx]) {
        let swap = heap[parent]
        heap[parent] = heap[idx]
        heap[idx] = swap

        idx = parent
        parent = Math.floor(idx / 2)
      }
    }

    const maxHeapLength = this.maxHeap.length
    const minHeapLength = this.minHeap.length

    const isEven = (maxHeapLength + minHeapLength) % 2
    if(maxHeapLength < minHeapLength) {
      if(isEven == 0) {
        while(this.maxHeap.length != this.minHeap.length) {
          // pick root from min, and add it to max
          let minRoot = this.minHeap[0]
          
          // heapify min heap
          this.minHeap[0] = this.minHeap[this.minHeap.length - 1]
          this.minHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.minHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] < heap[idx]
            || heap[r] < heap[idx]
          )) {
            let min = l
            if(heap[r] <  heap[l])
              min = r

            let swap = heap[idx]
            heap[idx] = heap[min]
            heap[min] = swap

            idx = min
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add min root to max heap
          this.maxHeap.push(minRoot)

          idx = this.maxHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.maxHeap
          while(parent >= 0 && heap[parent] < heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      } else {
        while(this.maxHeap.length <= this.minHeap.length) {
          // pick root from min, and add it to max
          let minRoot = this.minHeap[0]
          
          // heapify min heap
          this.minHeap[0] = this.minHeap[this.minHeap.length - 1]
          this.minHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.minHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] < heap[idx]
            || heap[r] < heap[idx]
          )) {
            let min = l
            if(heap[r] <  heap[l])
              min = r

            let swap = heap[idx]
            heap[idx] = heap[min]
            heap[min] = swap

            idx = min
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add min root to max heap
          this.maxHeap.push(minRoot)

          idx = this.maxHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.maxHeap
          while(parent >= 0 && heap[parent] < heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      }
    } else if(maxHeapLength - minHeapLength > 1) {
      if(isEven == 0) {
        while(this.maxHeap.length != this.minHeap.length) {
          // pick root from max, and add it to min
          let maxRoot = this.maxHeap[0]
          
          // heapify min heap
          this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1]
          this.maxHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.maxHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] > heap[idx]
            || heap[r] > heap[idx]
          )) {
            let max = l
            if(heap[r] > heap[l])
              max = r

            let swap = heap[idx]
            heap[idx] = heap[max]
            heap[max] = swap

            idx = max
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add max root to min heap
          this.minHeap.push(maxRoot)

          idx = this.minHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.minHeap
          while(parent >= 0 && heap[parent] > heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      } else {
        while(this.maxHeap.length - this.minHeap.length > 1) {
          // pick root from max, and add it to min
          let maxRoot = this.maxHeap[0]
          
          // heapify min heap
          this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1]
          this.maxHeap.pop()

          let idx = 0
          let l = 2 * idx
          let r = 2 * idx + 1
          let heap = this.maxHeap

          while(idx < heap.length && l < heap.length && (
            heap[l] > heap[idx]
            || heap[r] > heap[idx]
          )) {
            let max = l
            if(heap[r] > heap[l])
              max = r

            let swap = heap[idx]
            heap[idx] = heap[max]
            heap[max] = swap

            idx = max
            l = 2 * idx
            r = 2 * idx + 1
          }

          // add max root to min heap
          this.minHeap.push(minRoot)

          idx = this.minHeap.length - 1
          let parent = Math.floor(idx / 2)
          heap = this.minHeap
          while(parent >= 0 && heap[parent] > heap[idx]) {
            let swap = heap[parent]
            heap[parent] = heap[idx]
            heap[idx] = swap

            idx = parent
            parent = Math.floor(idx / 2)
          }
        }
      }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const maxHeapLength = this.maxHeap.length
    const minHeapLength = this.minHeap.length

    const isEven = (maxHeapLength + minHeapLength) % 2

    if(isEven == 0) {
      return (this.minHeap[0] + this.maxHeap[0]) / 2
    }

    return this.maxHeap[0]
};

export { MedianFinder }
