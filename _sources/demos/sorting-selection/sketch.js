let someList = [5, 15, 3, 8, 9, 1, 20, 7];

async function setup() {
  selectionSort(someList);
}

function draw() {
}

function selectionSort(aList) {
  let swapLocation = aList.length - 1;
  
  while (swapLocation > 0) {
    console.log([...aList]);
    
    //one pass
    let biggestLocation = 0;
    for (let i = 0; i <= swapLocation; i++) {
      if (aList[i] > aList[biggestLocation]) {
        biggestLocation = i;
      }
    }
    
    //swap
    let temp = aList[swapLocation];
    aList[swapLocation] = aList[biggestLocation];
    aList[biggestLocation] = temp;
    
    //decrease swap location
    swapLocation--;
  }
  
  console.log([...aList]);
}