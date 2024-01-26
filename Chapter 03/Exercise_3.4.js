let myCar = {
    make: "Harley Davidson",
    model: "Sportster",
    tires: 2,
    gear: 5,
    color: "red",
    forSale: false
};

let propColor = "color";
myCar[propColor] = "black";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);