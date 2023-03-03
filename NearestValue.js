const arr = [1, 2, 3, 4, 6, 7, 8, 9, 12, 13];
const input = 12;

function findNearestValue(arr, input) {
  let nearestVal = arr[0];
  let nearDist = Math.abs(input - arr[0]);
  
  for (let i = 1; i < arr.length; i++) {
    const distance = Math.abs(input - arr[i]);
    
    if (distance < nearDist) {
      nearestVal = arr[i];
      nearDist = distance;
    }
  }
  
  return nearestVal;
}




console.log(findNearestValue(arr, input));

