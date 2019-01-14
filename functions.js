/*All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/



// all men are mortal
function men(){
    this.isMortal= true;
  };
  
  //Socrates is a man
  const Socrates= new men();
  //Plato is a man
  const Plato = new men();
  // Zeus is not a man
  const Zeuss={};

  //arrow function declaration
  const checkMortality= (toCheck)=>{
    //is Name which want to check is part of men, and also it's property
    //isMortal is truthy
    if(typeof toCheck==="object" && toCheck.isMortal ){
       return true;
  }else{
      return false;
  }
  }

  // log result of the function
  console.log(checkMortality(Socrates));
 
  
  /*
  This cake is either vanilla or chocolate.
  This cake is not chocolate.
  Therefore, this cake is vanilla.
  */
  
  // two variables
  const flavors=["vanilla", "chocolate"];
  const isChocolate= true;
  
  //declaring function with two paramerers
  const checkFlavor=(arr, flag)=>{
    if(flag){
      console.log("The flavor of the cake is "+arr[1]);
    }else{
    console.log("The flavor of the cake is "+arr[0]);
  }
}
  
checkFlavor(flavors, isChocolate);
checkFlavor(flavors, !isChocolate);