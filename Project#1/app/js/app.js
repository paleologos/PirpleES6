//testObject
// let liObj={
//   lname:"first",
//   litems:[]
// }
// let liObj;
let allLists=[{lname:"test list", litem:[], listMember:true}];


// lilst constructor function
function ListConstructor(lname){
  this.lname=lname,
  this.litems=[],
  this.listMember= true
}

//constructing 
// function Foo(elementId, buttonId) {
//     var self = this;
//     this.element = document.getElementById(elementId);
//     this.button = document.getElementById(buttonId);
//     this.bar = function() {dosomething};
//     this.button.addEventListener('click', function(e) {self.bar();}, false);
// }


//TASKS TO ACHIEVE:
//test new todo and constructor
//hide all lists
//display new list container (form for creting new list)

//INITIALLY ON APP LOAD DISPLAYS ALL LISTS
//IT WILL BE CHANGED  LATER
//show all lists
window.addEventListener("load", function(){
  //first run iteration function
  displayAllLists();
  allListsContainer.style.display="block";
}); 

//EVENT ENABLING TO EDIT LISTS, EXECUTING listEditor FUNCTION DECLARED DOWN THE CODE
window.addEventListener("load",listEditor );

let newList= document.getElementById("new-list");
let allListsContainer= document.getElementById("all-lists-container");
//selecting ol
let newListContainer= document.getElementById("new-list-container");
let allListsHolder= allListsContainer.childNodes[1];


//EDIT LISTs
//because const hoisting here manageing lists
function listEditor(){
  let allListsMembers= document.querySelectorAll(".member-of-lists");
  console.log(allListsMembers);
  let arr = Array.prototype.slice.call(allListsMembers);
console.log(arr);
for(x of  arr){
  x.addEventListener("click", function(){
      console.log(x.className);
  });
}


}



// defining function to display all list
//iteration function
function displayAllLists(){
  //first must prevent duplicating output
    while( allListsHolder.firstChild){
      allListsHolder.firstChild.remove();
    }
    //then iterate trough all list
    for (x of allLists){
      let li= document.createElement("li");
      let tempLi= allListsHolder.appendChild(li);
      tempLi.innerText=x.lname;
      if(x.listMember){
        tempLi.classList.add("member-of-lists");
        
      }
    }
    
}
//show new list form
newList.addEventListener("click", function(){
  newListContainer.style.display="block";
  // hide all lists
  allListsContainer.style.display="none";
});

//create new list
const newLiName=document.getElementById("new-li-name");
const newLiSave=document.getElementById("new-li-save");
// add new list to all lists
newLiSave.addEventListener("click", function(){
  allLists.push(new ListConstructor(newLiName.value));
  // console.log(allLists);
});
// hide new list form
newLiSave.addEventListener("click", function(){
  newListContainer.style.display="none";
});

//show all lists
newLiSave.addEventListener("click", function(){
  //first run iteration function
  displayAllLists();
  allListsContainer.style.display="block";
});






///add to list and display
function listHandler(){
  const liInput= document.getElementById("li-input");
  if(liInput.value!==""){
   // push the value to the items array
   allLists[0].litems.push(liInput.value);

    
    const orderedList= document.querySelector("ol");
    const node= document.createElement("li");
    const listItem = orderedList.appendChild(node);
    //grabs last item of the list items array
    listItem.innerText=allLists[0].litems[allLists[0].litems.length-1];
    
    //displays name of the list on the top
    // that will goes to the other function
    // display list as part of other event handler
    const listName= document.getElementById("list-name");
    listName.innerText=liObj.lname;

  }else{
    console.log("Please enter the value in the field");
  }
  
}

// add item to the list
const AddToList= document.getElementById("li-add");
AddToList.addEventListener("click", listHandler);
