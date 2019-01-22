//HOMEWORK #7 - The DOM

// main function named elementConstructor()
const elementConstructor =(parent, newChild, childContent, chId="", chClass="")=>{
    //Declaring elCreator() - element creator function
    const elCreator= (newChild, childContent, chId, chClass)=>{
    
    const childElement= document.createElement(newChild);
    childElement.id= chId;
    childElement.className= chClass;
    childElement.innerText=childContent;
    return childElement;
}
  
  // Storing result of execution of the first function 
  //element creator- elCreator()
  const Child= elCreator(newChild, childContent, chId, chClass);
  
  //declaring appender() function, with two parameters, parent Element
  //and Child element which is result of executing 
  //first elCreator() function and which is appended to the parrent
  const appender=(parent, Child)=>{
    const container= document.querySelector(parent);
    container.appendChild(Child);
    return container;
  }
  
  
  //returning result of the second function - appender()
  return appender(parent, Child);

  
}






const rectangleGenerator=(n)=>{
  
  //Random HexColor
  const randColor=()=>{
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// select <body>
const body= document.querySelector("body");
  
// create rectangleWrapper div
const rectWrapper= document.createElement("div");
rectWrapper.id="rectanlgeWrapper";
rectWrapper.style.paddingTop="50px";
rectWrapper.style.paddingLeft="50px";
rectWrapper.style.paddingRight="50px";
rectWrapper.style.paddingDown="0 px";
  
//logging first part of console message

console.log("Here are the rectangle IDs: ");

//adding containers, rectangles, and color description
for(let i=1; i<=n; i++){
  //assign color variable as aresult of function
  const color= randColor();

  //create container div
  const container=document.createElement("div");
  container.className="container";
  //create rectangle
  const rectangle= document.createElement("div");
  //create color description
  const colorName= document.createElement("p");
  
  // append container to the rectangleWrapper
  rectWrapper.appendChild(container);
  //append rectangle to the container
  container.appendChild(rectangle);
  //append description to the container
  container.appendChild(colorName);
  
  // display HEX color name - code
  colorName.innerText=color;
  

  //add class to the all rectangles
  rectangle.className="rectangle";
  //add unique id to each rectangle
  rectangle.id=i;
  // assign backgroundColor property to the valu
  //of the variable color
  rectangle.style.backgroundColor= color;
  //display rectangle as block (CSS property)
  rectangle.style.display= "block";

  // add rectangle dimensions
  rectangle.style.width="100px";
  rectangle.style.height="100px";
  
  // second part of the console message
  console.log(rectangle.id);
  
  
  
  
}
// append rectWraper div to body

return body.appendChild(rectWrapper);
  
}

//executing first function
//Should expect pattern like this:
//elementConstructor(parentEL, childEL, Content, childID, childClass)
elementConstructor("body", "h1", "The DOM", "1", "someClass");
elementConstructor("body", "h2", "Homework Assignment #7", "2", "someClass");

//select title
const title= document.getElementsByTagName("title")[0];
//assign content  of the h1 element
//to the const named h1Content
const h1Content= document.querySelector("h1").innerText;
//assign content of the title element from the variable
//h1Content
title.innerText=h1Content;

//executing second function- how much rectangles
//you want to generate
rectangleGenerator(10);







