export {};
type Product = {
    price: number
};

const product1: {price:number} = { price: 10 };
const product2: {price:number} = { price: 20 };
const discount: number = 10;

const total:number = product1.price + product2.price;
//total = total - 10
//total += 10;
const totalWithDiscount: number = total - 10;

console.log(`Cena przed znizka: ${total}
    Cena po zniszcze ${totalWithDiscount}`);
