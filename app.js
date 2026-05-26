"use strict";
const product1 = { price: 10 };
const product2 = { price: 20 };
const discount = 10;
const total = product1.price + product2.price;
//total = total - 10
//total += 10;
const totalWithDiscount = total - 10;
console.log(`Cena przed znizka: ${total}
    Cena po zniszcze ${totalWithDiscount}`);
