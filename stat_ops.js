/*All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/



// all men are mortal
function men(name){
    this.name=name;
    this.isMortal= true;
  };
  
  //Socrates is a man
  const man= new men("Socrates");
  
  if(typeof man==="object" && man.isMortal && man.name==="Socrates"){
  
  console.log("Socrates is mortal");
  }
  
  /*
  his cake is either vanilla or chocolate.
  This cake is not chocolate.
  Therefore, this cake is vanilla.
  */
  
  const cake="vanilla";
  
  if(cake==="vanilla" || cake==="chocolate"){
    if(cake!= "chocolate"){
      console.log("This cake is "+cake);
    }
  }
  
  //Second example
  
  if(cake==="vanilla" || cake==="chocolate" && cake!= "chocolate"){
    console.log("This cake is "+cake);
  }