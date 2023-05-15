"use strict";
const product = (item) => {
    if (Array.isArray(item)) {
        return item.length;
    }
    return item.product;
};
const product1 = product({ product: "apple" });
const product2 = product([{ product: "apple" }, { product: "banana" }]);
console.log(product1);
console.log(product2);
