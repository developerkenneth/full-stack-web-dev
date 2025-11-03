function primeNumber(number){

    if(number < 2){
      return false;
    }
    
    for(let i = 2; i < number ; i++){
      if(number % i === 0){
        return false ;
      }
    }

  return true ;
}

// loop or function

function compositeAndPrime(number){
    for(let i = 2 ; i <= number; i++){

        const answer = primeNumber(i);
      if( answer == true){
        console.log(i, "is a prime number");
      }else{
        console.log(i, "is a composite number");
      }


    }
}

compositeAndPrime(100);

