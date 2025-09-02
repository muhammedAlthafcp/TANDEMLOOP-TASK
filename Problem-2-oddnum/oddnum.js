let a = 29;

function num(val) {
   let result = [];
   for (let i = 1; i <= val; i++) {
      result.push(2 * i - 1);
   }
   return result;
}

console.log(num(a)); 
