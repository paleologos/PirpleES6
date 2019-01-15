const timeAdder=(value1, label1, value2, label2)=>{
    let value3;
    let label3;
    const result=[];
    
    // function used for returning values
     const returner=(array, value, label)=>{
     array.push(value, label);
     return array;
   };
   
   //main switch which checking time labels 
    switch (label1 +"|"+ label2){
        
        // SECONDS
        // both labels are seconds
        case "seconds|seconds":
        value3=value1+value2;
        label3=label1;
            // if the sum of the seconds is equal 60 then it's a minute
            if(value3 ===60){
            value3 =1;
            label3= "minute";
            return returner(result,value3,label3);
            }
        return returner(result,value3,label3);
      
        // seconds -minutes
        case "seconds|minutes":
        value3=value1+value2*60;
        if(value3 %60===0){ 
             label3=label2;
             value3/=60;  
             return returner(result,value3, label3);
        }else{
             label3=label1;
             return returner(result,value3,label3);
        }
        
        // seconds - hours
         case "seconds|hours":
        value3=value1+value2*3600;
        if(value3 %3600===0){ 
             label3=label2;
             value3/=3600;  
              return returner(result,value3, label3);
        }else{
             label3=label1;
              return returner(result,value3, label3);
        }
        
        // seconds -days
        case "seconds|days":
        value3=value1+value2*86400;
        if(value3 %86400===0){ 
             label3=label2;
             value3/=86400;  
              return returner(result,value3, label3);
        }else{
             label3=label1;
              return returner(result,value3, label3);
        }
         
    
        //MINUTES (value1, label1, value2, label2)
        //minutes -seconds
         case "minutes|seconds":
        value3=value1*60+value2;
        if(value3 %60===0){ 
             label3=label1;
             value3/=60;  
             return returner(result,value3, label3);
        }else{
             label3=label2;
             return returner(result,value3,label3);
        }
       
      
        // minutes -minutes
        case "minutes|minutes":
        value3=value1+value2;
        label3=label1;
                    // if the sum of the minutes is equal to 60 then it's a hour
            if(value3 ===60){
            value3 =1;
            label3= "hour";
            return returner(result,value3,label3);
            }
             return returner(result,value3, label3);
        
        // minutes - hours
         case "minutes|hours":
        value3=value1+value2*60;
        if(value3 %60===0){ 
             label3=label2;
             value3/=60;  
              return returner(result,value3, label3);
        }else{
             label3=label1;
              return returner(result,value3, label3);
        }
        
        // minutes -days
        case "minutes|days":
        value3=value1+value2*1440;
        if(value3 %1440===0){ 
             label3=label2;
             value3/=1440;  
              return returner(result,value3, label3);
        }else{
             label3=label1;
              return returner(result,value3, label3);
        }
        
        
        // HOURS  
        // hours -seconds
         case "hours|seconds":
        value3=value1*3600+value2;
        if(value3 %3600===0){ 
             label3=label1;
             value3/=3600;  
             return returner(result,value3, label3);
        }else{
             label3=label2;
             return returner(result,value3,label3);
        }
       
      
       
        // hours - minutes
         case "hours|minutes":
        value3=value1*60+value2;
        if(value3 %60===0){ 
             label3=label1;
             value3/=60;  
              return returner(result,value3, label3);
        }else{
             label3=label2;
              return returner(result,value3, label3);
        }
        
         // hours -hours
        case "hours|hours":
        value3=value1+value2;
             label3=label1;
                         // if the sum of the seconds is equal to 24 then it's a day
            if(value3 ===24){
            value3 =1;
            label3= "day";
            return returner(result,value3,label3);
            }
             return returner(result,value3,label3);
        
        // hours -days
        case "hours|days":
        value3=value1+value2*24;
        if(value3 %24===0){ 
             label3=label2;
             value3/=24;  
              return returner(result,value3, label3);
        }else{
             label3=label1;
              return returner(result,value3, label3);
        }
        
        
        
        //DAYS
    
        // days -seconds
         case "days|seconds":
        value3=value1*86400+value2;
        if(value3 %86400===0){ 
             label3=label1;
             value3/=86400;  
             return returner(result,value3, label3);
        }else{
             label3=label2;
             return returner(result,value3,label3);
        }
       
      
       
        // days - minutes
         case "days|minutes":
        value3=value1*1440+value2;
        if(value3 %1440===0){ 
             label3=label1;
             value3/=1440;  
              return returner(result,value3, label3);
        }else{
             label3=label2;
              return returner(result,value3, label3);
        }
        
         // days -hours
        case "days|hours":
        value3=value1*24+value2;
        if(value3 %24===0){ 
             label3=label1;
             value3/=24;  
              return returner(result,value3, label3);
        }else{
             label3=label2;
              return returner(result,value3, label3);
        }
        
        // hours -days
        case "hours|days":
        value3=value1+value2*24;
        if(value3 %24===0){ 
             label3=label2;
             value3/=24;  
              return returner(result,value3, label3);
        }else{
             label3=label1;
              return returner(result,value3, label3);
        }
        
        //days -days
        case "days|days":
        value3=value1+value2;
             label3=label1;
             return returner(result,value3,label3);
         
       
        
        default: return false;
        
    }
    
  
};


console.log(timeAdder(60,"minutes",0,"minutes"));


