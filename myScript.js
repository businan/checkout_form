function CounterUpdate(action) {
    const salePrice  = 54.99;
    const normalPrice = 94.99;

    let counter = document.getElementById('counter').innerHTML;
    let parsed = parseInt(counter);
    let result =parsed ;

    let price1 = document.getElementById('sale-price-1').innerHTML;
    let parsed2 = parseFloat(price1);
    let salePriceResult = parsed2;
    
    let price2 = document.getElementById('normal-price-1').innerHTML;
    let parsed3 = parseFloat(price2);
    let normalPriceResult = parsed3;


    if(action=='+')
    {
      result = parsed +1;
      salePriceResult +=  salePrice;
      normalPriceResult += normalPrice;
    }
    else if(action=='-')
    {
        if(parsed != 1){
            result = parsed -1;
            salePriceResult -=  salePrice;
            normalPriceResult -= normalPrice;
        }
        else if(parsed == 1){
            
            salePriceResult =  salePrice;
            normalPriceResult = normalPrice;
        }
       
    }
    document.getElementById('counter').innerHTML = result;
    document.getElementById('sale-price-1').innerHTML = salePriceResult.toFixed(2);
    document.getElementById('normal-price-1').innerHTML = normalPriceResult.toFixed(2);

}

// function CounterUpdate2(action) {
//     var counter = document.getElementById('counter2').innerHTML;
//     var parsed = parseInt(counter);
//     var result =parsed ;
//     if(action=='+')
//     {
//       result = parsed +1;
//     }
//     else if(action=='-')
//     {
//         if(parsed > 0){
//             result = parsed -1;
//         }
      
//     }
//     document.getElementById('counter2').innerHTML = result;
// }
function CounterUpdate2(action) {
    const salePrice  = 74.99;
    const normalPrice = 124.99;
    

    let counter = document.getElementById('counter2').innerHTML;
    let parsed = parseInt(counter);
    let result =parsed ;

    let price1 = document.getElementById('sale-price-2').innerHTML;
    let parsed2 = parseFloat(price1);
    let salePriceResult = parsed2;
    
    let price2 = document.getElementById('normal-price-2').innerHTML;
    let parsed3 = parseFloat(price2);
    let normalPriceResult = parsed3;


    if(action=='+')
    {
      result = parsed +1;
      salePriceResult +=  salePrice;
      normalPriceResult += normalPrice;
    }
    else if(action=='-')
    {
        if(parsed != 1){
            result = parsed -1;
            salePriceResult -=  salePrice;
            normalPriceResult -= normalPrice;
        }
        else if(parsed == 1){
            
            salePriceResult =  salePrice;
            normalPriceResult = normalPrice;
        }
       
    }
    
    document.getElementById('counter2').innerHTML = result;
    document.getElementById('sale-price-2').innerHTML = salePriceResult.toFixed(2);
    document.getElementById('normal-price-2').innerHTML = normalPriceResult.toFixed(2);
    
}
function totalPayment() {
    let shipping = 19 ;

    let price1 = document.getElementById('sale-price-1').innerHTML;
    let parsed2 = parseFloat(price1);
    let prudoct1 = parsed2;
    
    let price2 = document.getElementById('sale-price-2').innerHTML;
    let parsed3 = parseFloat(price2);
    let prudoct2 = parsed3;
    
    document.getElementById('total-payment').innerHTML = (prudoct1+prudoct2+shipping).toFixed(2);
}

// function myFunction() {
//     document.getElementById("demo").innerHTML = 5;
//   }