const arr = [45, 36, 90, 76, 32, 7];

for(let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
  console.clear();
}

//Pecorrendo arrays com for...of
for(const element of arr) {
  console.log(element);
  console.clear();
}

//Percorrendo arrays com for...in
for(const indice in arr) {
  console.log(indice);
}