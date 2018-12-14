// *** YOUR ANSWER BELOW ***
function findIndex(n){
  let a = 1;
  let b = 1;
  let c = 2;
  let count = 2;
  let error = "Your number is not in the Fibonacci sequence. Please choose another number.";

  if(n > b){
    count++;
  } else if(n === b){
    return count;
  } else {return error;}

  if(n > c){
    count++;
  } else if(n === c){
    return count;
  } else {return error;}

  while(n > 0){
    a = c + b;
    console.log(`n=${n} and a=${a}`);
    if(n > a){
      count++;
    } else if(n === a){
      return count;
    } else {return error;}

    b = a + c;
    console.log(`n=${n} and b=${b}`);
    if(n > b){
      count++;
    } else if(n === b){
      return count;
    } else {return error;}

    c = b + a;
    console.log(`n=${n} and c=${c}`);
    if(n > c){
      count++;
    } else if(n === c){
      return count;
    } else {return error;}
    console.log(`c = ${c}`);
  }
}

findIndex(5);
