let someList = [5, 15, 3, 8, 9, 1, 20, 7];

async function setup() {
  bubbleSort(someList);
}

function draw() {
}

function bubbleSort(aList) {
  let swapNeeded = true;
  while (swapNeeded) {
    console.log([...aList]);
    swapNeeded = false;
    
    //one pass
    for (let i = 0; i < aList.length - 1; i++) {
      if (aList[i] > aList[i+1]) {
        //swap
        let temp = aList[i];
        aList[i] = aList[i+1];
        aList[i+1] = temp;
        
        swapNeeded = true;
      }
    }
  }
}