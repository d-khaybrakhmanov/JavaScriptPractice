let myList=[];
myList.push("Milk", "Bread", "Apple");
myList.splice(1, 1, "Bananas", "Eggs");
let removeLast = myList.pop();
console.log(removeLast);
myList.sort();
console.log(myList.indexOf("Milk"));
myList.splice(1, 0, "Carrots", "Lettuce");
let myList2 = ["Juice", "Pop"];
let finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);