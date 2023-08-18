'use strict';

function BinarioADecimal(num) {

   let decimal = 0
   for (let i = num.length - 1; i >= 0; i--) {
      let posicion = num.length - 1 - i
      decimal += num[1] * 2 ** posicion
   }
   return decimal
}

function DecimalABinario(num) {
   let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum
 }

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
