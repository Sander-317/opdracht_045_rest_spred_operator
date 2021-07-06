const optellen = function(...nums) {
    return nums.reduce((prev, current) => prev + current)
}

console.log(optellen(1,2,3,4,5,6))

const optellen2 = function(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  const cijfers = [1, 2, 3];
  
  console.log(optellen2(...cijfers));
 

  const optellen3 = function(...nums) {
    return nums.reduce((prev, current) => prev + current)
  }
  
  const cijfers2 = [1, 2, 3];
  
  console.log(optellen3(...cijfers2));
 