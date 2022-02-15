// memory select
function costUpdate(product,price){
    const productSelect = document.getElementById(product + '-cost');
    const productCost = productSelect.innerText;
    productSelect.innerText = price;
    const totalproductCost = parseFloat(productCost) + parseFloat(price);
    productSelect.innerText = totalproductCost;
    
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;


    const totalPrice = document.getElementById('total-price');
    const totalCost = totalPrice.innerText;
    totalPrice.innerText = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

}

document.getElementById('eightGB').addEventListener('click', function(){
    const eightGBPrice = costUpdate('memory','1200');
})

document.getElementById('sixteenGB').addEventListener('click', function(){
    const sixteenGBPrice = costUpdate('memory','1600');
})

document.getElementById('ssd1').addEventListener('click', function(){
    const ssd1 = costUpdate('storage','1500');
})

document.getElementById('ssd2').addEventListener('click', function(){
    const ssd2 = costUpdate('storage','1800');
})

document.getElementById('ssd3').addEventListener('click', function(){
    const ssd3 = costUpdate('storage','2200');
})

document.getElementById('free-delivery').addEventListener('click', function(){
    const freeDelivery = costUpdate('delivery','0');
})

document.getElementById('paid-delivery').addEventListener('click', function(){
    const paidDelivery = costUpdate('delivery','20');
})

