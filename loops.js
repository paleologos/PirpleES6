// function which checking is number is prime
const isPrime= (n)=>{
    for(var i=2; i<n; i++){
      
    if(n %i===0){
      return false;
    }
      
    }
       return true;
  }
  
  //declaring function for getting values
  const getValues=(x)=>{
    for(var i=1; i<x; i+=1){
        // FIZZBUZZ also can be tested with expression if(i%3===0 && i%5===0)
          if(i %15===0){
            console.log("FIZZBUZZ");
            //Checking for FIZZ
            }else if(i %3 ===0){ 
              console.log("FIZZ");
              }else if(i %5 ===0){
              //Checking for BUZZ
                console.log("BUZZ");
                // check are they prime by expecting that returned value will be T
                }else if( isPrime(i)){
                   console.log("PRIME");
                }else{
                    // log rest of the numbers
                  console.log(i);
                      }
    }
  
  }
  
  //executing the function
  getValues(100);
  
  
  // Only first 100 primes
  /*
  for(var i=1; i<100; i+=1){
  if(isPrime(i)){
    console.log(i);
  }
  }
  */
  