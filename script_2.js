let number = prompt('Un nombre ?')

function factorial(number_to_factor){
  let result = 1;
  for (let i = 1; i <= number; i++) {
   result = result * i;
  }
  return result
}


console.log(`La factoriel est : ${factorial(number)}`);