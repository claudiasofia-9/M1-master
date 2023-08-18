'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array

  var pivot = array [0],
  left = [],
  right = []

  var i = 1
  while (i < array.length){
    if (array[i] < pivot) left.push(array[i])
    else right.push(array[i])

    i++
  }

  return quickSort(left).concat(pivot).concat(quickSort(right))
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  if (array.length <= 1) return array

  var mid = Math.floor(array.length / 2),
  left = array.slice(0, mid),
  right = array.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  var leftIndex = 0
  var rightIndex = 0
  var merged = []

  while (leftIndex < left. length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      merged.push(left[leftIndex])
      leftIndex++
    } else {
      merged.push(right[rightIndex])
      rightIndex++
    }
  }  

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};